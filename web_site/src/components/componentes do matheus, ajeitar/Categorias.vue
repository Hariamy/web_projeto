<template>
  <div class="ganhos">
    <div class="margem p-2 my-3 rounded shadow-sm border border-warning">
      <h3 class="text-center text-warning font-weight-bold text-uppercase">CATEGORIA</h3>

      <div class="d-flex">
        <div class="p-6 align-self-center flex-fill">
          <div class="margem-tabela">
            <div class="table-responsive">
              <table class="table table-fixed text-center">
                <h4 class="text-success">Categorias Receitas</h4>
                <thead>
                  <tr>
                    <th scope="col" class="col-5">NOME</th>
                    <th scope="col" class="col-2">COR</th>
                    <th scope="col" class="col-4">OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="coisa in coisas" :key="coisa.id">
                    <td class="col-5">Nome das coisas</td>
                    <td class="col-2">Mark</td>
                    <td class="col-4">
                      <div class="d-flex justify-content-center">
                        <div class="col-md-2">
                          <a href="#">
                            <img src="../assets/editar.svg" />
                          </a>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                          <a href="#">
                            <img src="../assets/deletar.svg" />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="p-6 align-self-center flex-fill">
          <div class="margem-tabela">
            <div class="table-responsive">
              <table class="table table-fixed text-center">
                <h4 class="text-danger">Categorias Despesas</h4>
                <thead>
                  <tr>
                    <th scope="col" class="col-5">NOME</th>
                    <th scope="col" class="col-2">COR</th>
                    <th scope="col" class="col-4">OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="coisa in coisas" :key="coisa.id">
                    <td class="col-5">Nome das coisas</td>
                    <td class="col-2">Mark</td>
                    <td class="col-4">
                      <div class="d-flex justify-content-center">
                        <div class="col-md-2">
                          <a href="#">
                            <img src="../assets/editar.svg" />
                          </a>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                          <a href="#">
                            <img src="../assets/deletar.svg" />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row-reverse align-items-stretch">
        <div class="p-4">
          <img
            class="add-receita-botao"
            v-on:click="add_receita=!add_receita"
            src="../assets/add_categoria.svg"
          />
        </div>
        <div class="p-4"></div>
      </div>
    </div>
    <div class="d-flex justify-content-center add-receita-externo" v-if="add_receita">
      <div class="add-receita shadow rounded align-self-center">
          <img class="fechar-botao d-flex justify-content-start" v-on:click="add_receita=!add_receita" src="../assets/fechar.svg" />
          <h3 class="font-weight-bold d-flex justify-content-center">INSERIR CATEGORIA</h3>
          <form>
            <div class="form-group d-flex justify-content-center">
              <input type="text" class="form-control" placeholder="Nome" v-model="nome_categoria" id="nome-categoria">
              <input type="text" class="form-control" placeholder="#000000" v-model="cor_categoria">
            </div>
                   
            <button class="btn btn-primary">Inserir</button>
        </form>
        
        
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Categoria",
  props: {
    mes: String
  },

  data() {
    return {
      coisas: [
        { id: 1 },
        { id: 0 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ],
      add_receita: false
    };
  },
  methods: {
    formatar: function(valor) {
      return valor.toFixed(2);
    },
    esconde_opcoes: function() {
      if (this.opcoes_menu) {
        this.botao_menu = true;
        this.opcoes_menu = false;
      }
    },
    printa(){
      alert(this.cor_categoria);
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
  background-color: rgba(25, 25, 25, 0.5);
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
#nome-categoria{
  margin-right: 10px;
}

</style>
