<template>
  <div class="ganhos">

    <div class=" margem p-2 my-3 rounded shadow-sm border border-danger">
      
      <h3 class="text-center text-danger font-weight-bold text-uppercase">DESPESAS</h3>
      
      <div class="margem-tabela">
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
                    <tr v-for="coisa in coisas" :key="coisa.id">
                        <td class="col-2">1</td>
                        <td class="col-3">Mark</td>
                        <td class="col-2">Otto</td>
                        <td class="col-2">@mdo</td>
                        <td class="col-3">
                          <div class="d-flex justify-content-center">
                            <div class="col-md-2">
                              <a href="#" ><img src="../assets/editar.svg" /></a>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-2">
                              <a href="#"><img src="../assets/deletar.svg" /></a>
                            
                            </div>
                          </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div class="d-flex flex-row-reverse align-items-stretch">
        <div class="p-4">
          <img class="add-receita-botao" v-on:click="add_receita=!add_receita" src="../assets/add_despesa.svg" />
        </div>
         <div class="p-4"></div>
      </div>

    </div>
    <div class="d-flex justify-content-center add-receita-externo" v-if="add_receita">
      <div class="add-receita shadow rounded align-self-center">
        <h3 class="font-weight-bold d-flex justify-content-center">INSERIR DESPESAS</h3>
        <br>
        <div class="d-flex justify-content-center">
          <form>
            <div class="form-group">
              <input type="text" class="form-control col-12" placeholder="Nome" v-model="nome_receita">
            </div>
            <div class="form-group">
              <input type="date" class="form-control col-12" v-model="data_pagamento">
            </div>
            <div class="form-group">
              <input type="text" class="form-control col-12" placeholder="Valor" v-model="valor">
            </div>
            <div class="form-group">
              <select class="custom-select col-12" id="inputGroupSelect01" v-model="categoria">
                <option value="" selected disabled hidden>Escolha uma categoria</option>
                <option value="1">Contas</option>
                <option value="2">Emprestimo</option>
                <option value="3">Internet</option>
              </select>
            </div>        
            <div class="d-flex justify-content-center">
              <button class="btn btn-danger" v-on:click="add_receita=!add_receita">CANCELAR</button>
              <button class="btn btn-primary">CRIAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Ganhos",
  props: {
    mes: String
  },
  data() {
    return {
      coisas: [
        {id: 1},
        {id: 0},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10}
      ],
      add_receita: false,
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

button {
  margin: 10px;
}

.margem-tabela {
  margin: 20px;
  padding: 20px;
}

a {
  margin: 10px;
}
img {
  height: 30px;
  width: 30px;
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
