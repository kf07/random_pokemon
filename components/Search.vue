<template>
  <form>
    <input type="text" :value="pokemonName" @keyup="handleChange" />
    <button type="button" @click="handleSubmit">表示</button>
    <button v-if="mega === 'before'" type="button" @click="megaEvolution">
      メガシンカ
    </button>
    <button v-if="mega === 'after'" type="button" @click="megaEvolutionReturn">
      メガシンカ前
    </button>
  </form>
</template>

<script>
import { ref, watch, onMounted } from '@vue/composition-api'
export default {
  name: 'Search',
  props: ['search', 'mega'],
  setup({ search, mega }, { emit }) {
    const pokemonName = ref(search)
    const handleSubmit = () => {
      event.preventDefault()
      console.log(pokemonName.value)
      emit('search', pokemonName.value)
    }
    const megaEvolutionFlg = ref(false)
    const handleChange = e => {
      pokemonName.value = e.target.value
    }
    const megaEvolution = () => {
      if (pokemonName.value === 'リザードン') {
        pokemonName.value = `メガ${pokemonName.value}Y`
      } else {
        pokemonName.value = `メガ${pokemonName.value}`
      }
      emit('search', pokemonName.value)
    }
    const megaEvolutionReturn = () => {
      pokemonName.value = pokemonName.value.replace('メガ', '')
      emit('search', pokemonName.value)
    }
    return {
      pokemonName,
      handleSubmit,
      handleChange,
      megaEvolution,
      megaEvolutionReturn,
      megaEvolutionFlg
    }
  }
}
</script>

<style scoped></style>
