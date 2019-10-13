<template>
  <div id="app">
    <ValidationProvider rules="required" v-slot="{ errors, classes }" name="Prénom">
      <input
        type="text"
        name="lastname"
        id="lastname"
        v-model="lastname"
        class="form-control"
        placeholder="Prénom"
        :class="classes"
      >
      <div v-if="errors" class="invalid-feedback">{{ errors[0] }}</div>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
