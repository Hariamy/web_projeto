<template>
 <div class="graficos-meses">

    <div class=" margem p-2 my-3 rounded shadow-sm border border-info">
      
      <h3 class="text-center text-info font-weight-bold text-uppercase">GRÁFICOS DOS ÚLTIMOS 4 MESES</h3>
      <div v-if="usuario.despesas != [] || usuario.receitas != []" class="d-flex">
        <div class="p-2 align-self-center flex-fill d-flex justify-content-center">
          <GraficoLinha
            v-bind:series="[{
                name: 'Receitas',
                data: total_receitas
            }, {
                name: 'Despesas',
                data: total_despesas
            }]"
            v-bind:categories="meses"

            titulo="GANHOS VS GASTOS"
          />
        </div>
        <div class="p-2 align-self-center flex-fill ">
          <div>
            <GraficoBarra
              v-bind:series="receitas_categoria"

              v-bind:categories="meses"
              titulo="GANHOS POR CATEGORIA"
            />
          </div>
          <div>
            <GraficoBarra
              v-bind:series="despesas_categoria"

              v-bind:categories="meses"
              titulo="GASTOS POR CATEGORIA"
            />
          </div>
        </div>

      </div>
      <div v-else>
        <h5 class="text-center font-weight-bold">Nenhuma nenhuma receita ou despesa cadastrada!<br>Adicione informações para ver as informações.</h5>
      </div>
    </div>
  </div>

</template>

<script>
import GraficoBarra from './GraficoBarra';
import GraficoLinha from './GraficoLinha';
import { endpoints } from "../rotasAPI";

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default {
  name: "GraficoMeses",
  components: {
    GraficoLinha,
    GraficoBarra
  },
  data() {
    return {
      usuario: undefined,
      meses: [0, 0, 0, 0],
      total_receitas: [0, 0, 0, 0],
      total_despesas: [0, 0, 0, 0],
      receitas_categoria: [],
      despesas_categoria: [],
    };
  },
  methods: {
    formatar: function(valor) {
      return valor.toFixed(2)
    },
    esconde_opcoes: function() {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    },
    calcula_total_meses: function () {
      const hoje = new Date();
      var ano = hoje.getFullYear();
      var mes = hoje.getMonth();

      var indices = []
      var cont = 3;

      for (let i = 0; i < 4; i++) {
        indices.unshift([mes, ano, cont])
        
        this.meses[cont] = meses[mes];
        
        cont -= 1;

        ano = mes - 1 < 0 ? ano-1 : ano;
        mes = mes - 1 < 0 ? 12 : mes - 1;
      }

      this.usuario.receitas.map(receita => {
        const data = new Date(receita.data);
        indices.map(obj => {
          if (obj[0] == data.getMonth() && obj[1] == data.getFullYear()) {
            this.total_receitas[obj[2]] += receita.valor;
          }
        })
      });

      this.usuario.despesas.map(despesa => {
        const data = new Date(despesa.data);
        indices.map(obj => {
          if (obj[0] == data.getMonth() && obj[1] == data.getFullYear()) {
            this.total_despesas[obj[2]] += despesa.valor;
          }
        })
      });

      this.usuario.categorias_receitas.map(categoria => {
        const nome = categoria.nome;
        const cat_id = categoria.id;
        var valores = [0, 0, 0, 0];

        this.usuario.receitas.map(receita => {
          const data = new Date(receita.data);
          const id = receita.categoria;
          indices.map(obj => {
            if (obj[0] == data.getMonth() && obj[1] == data.getFullYear() && id === cat_id) {
              valores[obj[2]] += receita.valor;
            }
          })
        });
        this.receitas_categoria.push({
          name: nome,
          data: valores
        })
      });

      this.usuario.categorias_despesas.map(categoria => {
        const nome = categoria.nome;
        const cat_id = categoria.id;
        var valores = [0, 0, 0, 0];

        this.usuario.despesas.map(receita => {
          const data = new Date(receita.data);
          const id = receita.categoria;
          indices.map(obj => {
            if (obj[0] == data.getMonth() && obj[1] == data.getFullYear() && id === cat_id) {
              valores[obj[2]] += receita.valor;
            }
          })
        });
        this.despesas_categoria.push({
          name: nome,
          data: valores
        })
      })

    }
  },
  created: async function () {
    const email = localStorage.email;
    const response = await fetch(endpoints.usuario + email);

    if (await response != undefined) {
      this.usuario = await response.json();
      this.calcula_total_meses();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margem {
  margin: 60px;
  margin-left: 160px;
  padding: 60px;
}
</style>
