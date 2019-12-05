<template>
  <div class="grafico">
    <div id="chart">
      <VueApexCharts type=line height=350 :options="chartOptions" :series="series" />
    </div>
  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "GraficoLinha",
  props: {
    series: Array,
    categories: Array,
    titulo: String,
  },
  components: {
    VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
            height: 350,
            zoom: {
              enabled: false
          }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: this.titulo,
            align: 'center'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: this.categories,
        }
      }
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
.grafico {
  width: 500px;
  height: 400px;
}
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
  position: absolute;
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
    height: 45vh;
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
