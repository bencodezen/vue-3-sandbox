import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2
    }
  },
  actions: {
    increment(amount = 1): void {
      this.count += amount
    }
  }
})
