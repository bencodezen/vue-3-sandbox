<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore
    }
  },
  computed: {
    tripleCount() {
      return this.counterStore.count * 3
    }
  },
  methods: {
    incrementByAmount() {
      this.counterStore.increment(1)
    }
  }
}
</script>

<template>
  <main>
    <h1>Pinia</h1>
    <p>Count: {{ counterStore.count }}</p>
    <p>New Count: {{ newCount }}</p>
    <p>Triple Count: {{ tripleCount }}</p>
    <button @click="incrementByAmount">Increment</button>
  </main>
</template>

<style></style>
