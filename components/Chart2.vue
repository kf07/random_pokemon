<template>
  <div id="app" style="width:600px">
    <canvas id="myChart2"></canvas>
  </div>
</template>
<script>
  import { reactive, computed, watch, ref } from '@vue/composition-api'
  import Chart from 'chart.js'

  export default {
    // extends: Radar,
    props: {
      pokemonStats: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        test: this.chartData
      }
    },
    mounted() {},
    setup(props) {
      watch(() => {
        console.log(props.pokemonStats.attack)
        const ctx = document.getElementById('myChart2').getContext('2d')
        const myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              `HP${props.pokemonStats.hp}`,
              `攻撃${props.pokemonStats.attack}`,
              `防御${props.pokemonStats.defence}`,
              `特攻${props.pokemonStats.spAttack}`,
              `特防${props.pokemonStats.spDefence}`,
              `素早さ${props.pokemonStats.speed}`
            ],
            datasets: [
              {
                label: '',
                data: [
                  props.pokemonStats.hp,
                  props.pokemonStats.attack,
                  props.pokemonStats.defence,
                  props.pokemonStats.spAttack,
                  props.pokemonStats.spDefence,
                  props.pokemonStats.speed
                ],
                borderColor: 'rgb(255, 99, 132)',
                pointStyle: 'line',
                pointRadius: 0,
                spanGaps: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scale: {
              pointLabels: {
                fontSize: 15 // フォントサイズ
              },
              ticks: {
                stepSize: 50,
                max: 150,
                min: 0,
                text: 'Custom Chart Title'
              }
            }
          }
        })
      })
    }
  }
</script>

<style scoped></style>
