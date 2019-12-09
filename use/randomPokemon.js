// import { usePokemonJson } from '@/hooks/pokemon-json'
// import { onMounted, ref, watch, computed } from '@vue/composition-api'
//
// const pokemonList = usePokemonJson()
//
// export default function () {
//   const RandomPokemon = ref('');
//   const getRandomPokemon = () => {
//     RandomPokemon.value = pokemonList.pokemonListEvolution[Math.floor(Math.random() * pokemonList.pokemonListEvolution.length)];
//   }
//   return RandomPokemon
// }

import { ref, onMounted } from '@vue/composition-api'
// import { usePokemonJson } from '@/hooks/pokemon-jsonあ

export function useRandomPokemon(list) {
  const pokemonList = list
  const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)]

  //
  // function update() {
  //   randomPokemon.value = pokemonList.pokemonListEvolution[Math.floor(Math.random() * pokemonList.pokemonListEvolution.length)];
  // }
  //
  // onMounted(() => {
  //   window.addEventListener('mousemove', update)
  // })
  //
  // const getRandomPokemon = () => {
  //   update()
  // }

  return randomPokemon
}
