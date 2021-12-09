<template>
  <div>
    <h1>pinia example</h1>
    <p>{{ counterStore.counter }}</p>
    <button @click="increAction">increAction</button>
    <button @click="increPatch">increPatch</button>
    <button @click="check">check</button>
    <button @click="getCount">getCount</button>
  </div>
  <div>
    <h1>pinia subscribe example</h1>
    <p>{{ counterStore.$state }}</p>
    <button @click="check">save state</button>
    <button @click="check">get state</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useCounterStore from '@/stores/counter'

export default defineComponent({
  setup() {
    const counterStore = useCounterStore()
    const increAction = () => counterStore.counter++;
    const increPatch = () => counterStore.$patch({ counter: counterStore.counter + 1 })
    const check = () => console.log(counterStore.counter);
    const getCount = () => counterStore.getCounter;
    counterStore.$subscribe((mutation, state) => {
      console.log(state)
    })
    return { counterStore, check, increAction, getCount, increPatch };
  },
})
</script>
<style lang="scss">
@import './assets/design';
button + button{
  margin-left: 1vw;
}
</style>
