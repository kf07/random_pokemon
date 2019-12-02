<template>
  <section class='container'>
    <div>
      <div>
        <p>{{ random.name }}</p>
      </div>
      <button @click='getRandomPokemon'>更新</button>
    </div>
    <Chart :pokemonStats="random.stats"/>
  </section>
</template>

<script>
  import axios from 'axios'
  import {onMounted, ref, watch, computed} from '@vue/composition-api'
  import {usePokemonJson} from '../hooks/pokemon-json'
  import {useRandomPokemon} from '../use/randomPokemon';
  import Chart from "../components/Chart";

  export default {
    components: {Chart},
    setup() {
      const state = usePokemonJson()
      const random = ref({
        'no': '',
        'name': '',
        'form': '',
        'isMegaEvolution': '',
        'evolutions': '',
        'types': '',
        'abilities': '',
        'hiddenAbilities': '',
        'stats': {'hp': '', 'attack': '', 'defence': '', 'spAttack': '', 'spDefence': '', 'speed': ''}
      });
      console.log(state)
      onMounted(() => {
        console.log(state.pokemonListEvolution)
        getRandomPokemon()
      })
      const getRandomPokemon = () => {
        random.value = useRandomPokemon(state.pokemonListEvolution)
      }
      return {
        state,
        random,
        getRandomPokemon
      }
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  ul,
  li {
    list-style: none;
  }
</style>
