<template>
  <div>
    <section class="container">
      <RandomPokemon :pokemon-list="state.pokemonListEvolution" />
    </section>
    <section class="container">
      <SearchPokemon :pokemon-list="state.pokemonListEvolution" />
    </section>
  </div>
</template>

<script>
import { onMounted, ref, watch, computed, reactive } from '@vue/composition-api'
import { usePokemonJson } from '../hooks/pokemon-json'
import RandomPokemon from '../components/RandomPokemon'
import SearchPokemon from '../components/SearchPokemon'

export default {
  components: { RandomPokemon, SearchPokemon },
  setup() {
    const state = usePokemonJson()
    return {
      state
    }
  }
}
</script>

<style lang="scss">
.pokemon-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;

  .name {
    width: 200px;
  }

  .chart {
    width: 50%;
  }
}

.container {
  margin: 0 auto;
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
