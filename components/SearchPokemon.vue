<template>
  <div class="pokemon-block">
    <div class="name">
      <Search :search="inputState.name" :mega="inputState.mega" @search="handleSearch"/>
      <div v-if="!inputState.search.length">
        <p>ポケモンがいないよ</p>
      </div>
    </div>
    <div style="width: 600px; height: 300px;">
      <client-only>
        <div v-if="inputState.search.length">
          <Chart2 :pokemon-stats="inputState.search[0].stats"/>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
  import Chart2 from '../components/Chart2'
  import Search from "../components/Search";
  import {onMounted, ref, watch, computed, reactive} from '@vue/composition-api'

  export default {
    name: "SearchPokemon",
    props: ['pokemonList'],
    components: {Search, Chart2},
    setup({pokemonList}) {
      const inputState = reactive({
        name: 'エルレイド',
        search: computed(() => {
          return pokemonList.filter(item => {
            return item.name === inputState.name
          })
        }),
        searchNo: '',
        noPokemon: computed(() => {
          return pokemonList.filter(item => {
            return item.no === inputState.searchNo
          })
        }),
        mega: ''
      })
      const noPokemon = ref('');

      watch(() => {
        if(inputState.search[0].isMegaEvolution) {
          inputState.mega = 'after'
        } else if(inputState.search[0].beforeMegaEvolution){
          inputState.mega = 'before'
        } else {
          inputState.mega = ''
        }
        inputState.searchNo = inputState.search[0].no
      })

      const handleSearch = (searchTerm) => {
        inputState.name = searchTerm
      }
      return {
        handleSearch,
        inputState,
        noPokemon
      }
    }
  }
</script>

<style scoped>

</style>
