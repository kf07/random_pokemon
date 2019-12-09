import { reactive, computed } from '@vue/composition-api'
import jsonData from '~/assets/json/pokemon_data.json'

export const usePokemonJson = () => {
  const data = jsonData
  const state = reactive({
    pokemonList: data,
    pokemonListEvolution: computed(() => {
      return data.filter(item => {
        return item.evolutions.length === 0
      })
    })
  })
  return state
}
