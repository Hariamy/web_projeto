<template>
  <div class="ganhos">

    <div class=" margem p-2 my-3 rounded shadow-sm border border-success">
       
      <h3 class="text-center text-success font-weight-bold text-uppercase">RECEITAS</h3>
      
      <div v-if="exibe_receitas" class="margem-tabela">
        <div class="table-responsive">
            <table class="table table-fixed text-center">
                <thead>
                    <tr>
                        <th scope="col" class="col-2">DATA</th>
                        <th scope="col" class="col-3">NOME</th>
                        <th scope="col" class="col-2">CATEGORIA</th>
                        <th scope="col" class="col-2">VALOR</th>
                        <th scope="col" class="col-3">OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="receita in usuario.receitas" :key="receita.id">
                        <td class="col-2">{{ receita.data }}</td>
                        <td class="col-3">{{ receita.nome }}</td>
                        <td class="col-2">{{ receita.categoria }}</td>
                        <td class="col-2">{{ receita.valor }}</td>
                        <td class="col-3">
                          <div class="d-flex justify-content-center">
                            <div class="col-md-2">
                              <img src="../assets/editar.svg" v-on:click="() => carrega_editar_receita(receita.id)"/>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-2">
                              <img src="../assets/deletar.svg" />
                            </div>
                          </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div v-else>
        <h5 class="text-center font-weight-bold">Nenhuma receita cadastrada!<br>Clique no botão abaixo para adicionar uma receita.</h5>
      </div>
      <div class="d-flex flex-row-reverse align-items-stretch">
        <div class="p-4">
          <img class="add-receita-botao" v-on:click="add_receita=!add_receita" src="../assets/add_receita.svg" />
        </div>
         <div class="p-4"></div>
      </div>

    </div>
    <div class="d-flex justify-content-center add-receita-externo" v-if="edit_receita">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">EDITAR RECEITA</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Nome" 
                v-model="nome_receita"
              />
            </div>
            <div class="form-group">
              <input 
                type="date" 
                class="form-control col-12" 
                v-model="data_receita"
              />
            </div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Valor" 
                v-model="valor_receita"
              />
            </div>
            <div class="form-group">
              <select class="custom-select col-12" id="inputGroupSelect01" v-model="categoria_receita">
                <option value="" selected disabled hidden>Escolha uma categoria</option>
								<option v-for="cat in usuario.categorias_receitas" :key="cat.nome" :value="cat.nome">{{ cat.nome }}</option>
              </select>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="() => { limpar_campos(); edit_receita=!edit_receita }">CANCELAR</button>
              <button class="btn btn-primary" v-on:click="salvar_editar_receita">EDITAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center add-receita-externo" v-if="add_receita">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">INSERIR RECEITAS</h3>
        <br>
        <div class="d-flex justify-content-center">
          <div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Nome" 
                v-model="nome_receita"
              />
            </div>
            <div class="form-group">
              <input 
                type="date" 
                class="form-control col-12" 
                v-model="data_receita"
              />
            </div>
            <div class="form-group">
              <input 
                type="text" 
                class="form-control col-12" 
                placeholder="Valor" 
                v-model="valor_receita"
              />
            </div>
            <div class="form-group">
              <select class="custom-select col-12" id="inputGroupSelect01" v-model="categoria_receita">
                <option value="" selected disabled hidden>Escolha uma categoria</option>
								<option v-for="cat in usuario.categorias_receitas" :key="cat.nome" :value="cat.nome">{{ cat.nome }}</option>
              </select>
            </div>        
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="() => { limpar_campos(); add_receita=!add_receita }">CANCELAR</button>
              <button class="btn btn-primary" v-on:click="adicionar_receita">CRIAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { endpoints } from "../rotasAPI"

export default {
  name: "Ganhos",
  props: {
    mes: String
  },
  data() {
    return {
      add_receita: false,
      edit_receita: false,
      data:null,
      nome:null,
      catecoria:null,
      valor:null,
      usuario: undefined,

      exibe_receitas: false,

      nome_receita: null,
      data_receita: null,
      valor_receita: null,
      categoria_receita: null,
      id_receita: null,
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
    limpar_campos: function () {
      this.nome_receita = "";
      this.data_receita = "";
      this.valor_receita = "";
      this.categoria_receita = "";
    },
    adicionar_receita: async function () {
      const response = await fetch(endpoints.receitas + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          nome: this.nome_receita,
          data: this.data_receita,
          valor: this.valor_receita,
          categoria: this.categoria_receita
        })
      })
      
      this.usuario = await response.json();
      
      if (await response != undefined) {
        this.add_receita = !this.add_receita
      }
    },
    carrega_editar_receita: async function (receita) {
      const index = this.usuario.receitas.findIndex(obj => obj.id === receita);

      this.nome_receita = this.usuario.receitas[index].nome
      this.data_receita = this.usuario.receitas[index].data
      this.valor_receita = this.usuario.receitas[index].valor
      this.categoria_receita = this.usuario.receitas[index].categoria
      this.id_receita = this.usuario.receitas[index].id
      
      this.edit_receita=!this.edit_receita;
    },
    salvar_editar_receita: async function () {
      const response = await fetch(endpoints.receitas_editar + this.usuario.email, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          id: this.id_receita,
          nome: this.nome_receita,
          data: this.data_receita,
          valor: this.valor_receita,
          categoria: this.categoria_receita
        })
      })
      
      this.usuario = await response.json();
      
      if (await response != undefined) {
        this.edit_receita = !this.edit_receita
      }
    }
  },
  created: async function () {
    const email = localStorage.email;
    const response = await fetch(endpoints.usuario + email);
    this.usuario = await response.json();
    if (this.usuario.receitas.length > 0) this.exibe_receitas = true;

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
.margem-tabela {
  margin: 20px;
  padding: 20px;
}

button {
  margin: 10px;
}

a {
  margin: 10px;
}
img {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
h5 {
  margin: 200px;
}
.add-receita-botao {
  width: 60px;
  height: 60px;
  cursor: pointer;

}

.add-receita {
  position: absolute;
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  z-index: 99;
  left: auto;
  right: auto;
}

.add-receita-externo {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(25, 25, 25, 0.5)
}

.fechar-botao {
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.table-fixed tbody {
    height: 40vh;
    overflow-y: auto;
    width: 100%;
    
}

.table-fixed thead,
.table-fixed tbody,
.table-fixed tr,
.table-fixed td,
.table-fixed th {
    display: block;
}

.table-fixed tbody td,
.table-fixed tbody th,
.table-fixed thead > tr > th {
    float: left;
    position: relative;
}
</style>
