<template>
 <div class="graficos-meses">

    <div class=" margem p-2 my-3 rounded shadow-sm border border-info">
      
      <h3 class="text-center text-info font-weight-bold text-uppercase">GRÁFICOS DOS ÚLTIMOS 4 MESES</h3>
      <div class="d-flex">
        <div class="p-2 align-self-center flex-fill d-flex justify-content-center">
          <GraficoLinha
            v-bind:series="[{
                name: 'High - 2013',
                data: [28, 29, 33, 36]
            }, {
                name: 'Low - 2013',
                data: [12, 11, 14, 18]
            }]"
            v-bind:categories="['Feb', 'Mar', 'Apr', 'May']"

            titulo="Ganhos"
          />
        </div>
        <div class="p-2 align-self-center flex-fill ">
          <div>
            <GraficoBarra
              v-bind:series="[{
                  name: 'Net Profit',
                  data: [44, 55, 57, 56]
              }, {
                  name: 'Revenue',
                  data: [76, 85, 101, 98]
              }, {
                  name: 'Free Cash Flow',
                  data: [35, 41, 36, 26]
              }]"

              v-bind:categories="['Feb', 'Mar', 'Apr', 'May']"
              titulo="Ganhos"
            />
          </div>
          <div>
            <GraficoBarra
              v-bind:series="[{
                  name: 'Net Profit',
                  data: [44, 55, 57, 56]
              }, {
                  name: 'Revenue',
                  data: [76, 85, 101, 98]
              }, {
                  name: 'Free Cash Flow',
                  data: [35, 41, 36, 26]
              }]"

              v-bind:categories="['Feb', 'Mar', 'Apr', 'May']"
              titulo="Ganhos"
            />
          </div>
        </div>

      </div>
      
    </div>
  </div>

</template>

<script>
import GraficoBarra from './GraficoBarra'
import GraficoLinha from './GraficoLinha'

export default {
  name: "GraficoMeses",
  components: {
    GraficoLinha,
    GraficoBarra
  },
  data() {
    return {
      
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margem {
  margin: 60px;
  padding: 60px;
}
</style>
