<template>
  <div>
    <div class="pokemon-block">
      <div class="name">
        <div>
          <p>{{ random.name }}</p>
        </div>
        <button @click="getRandomPokemon">更新</button>
      </div>
      <client-only class="chart">
        <Chart :pokemon-stats="random.stats"/>
      </client-only>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
import {useRandomPokemon} from '../use/randomPokemon'
import {onMounted, ref, watch, computed, reactive} from '@vue/composition-api'
export default {
  name: "RandomPokemon",
  components: {Chart},
  props: ['pokemonList'],
  setup({pokemonList}) {
    const random = ref({
      no: '',
      name: '',
      form: '',
      isMegaEvolution: '',
      evolutions: '',
      types: '',
      abilities: '',
      hiddenAbilities: '',
      stats: {
        hp: '',
        attack: '',
        defence: '',
        spAttack: '',
        spDefence: '',
        speed: ''
      }
    })
    onMounted(() => {
      getRandomPokemon()
    })
    const getRandomPokemon = () => {
      random.value = useRandomPokemon(pokemonList)
    }
    return {
      random,
      getRandomPokemon
    }
  }
}
</script>

<style scoped>

</style>
