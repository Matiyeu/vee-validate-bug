<template>
  <div id="app">
    <a href="https://github.com/Matiyeu/vee-validate-bug">Source on Github</a><br><br>

    <label for="withAccent">Placeholder with an accent</label><br>
    <ValidationProvider rules="required" v-slot="{ errors, classes }" name="Prénom">
      <input
              type="text"
              id="withAccent"
              v-model="withAccent"
              class="form-control"
              placeholder="Prénom"
              :class="classes"
      >
      <div v-if="errors" class="invalid-feedback">{{ errors[0] }}</div>
    </ValidationProvider>

    <br><br>

    <label for="withoutAccent">Placeholder without accent</label><br>
    <ValidationProvider rules="required" v-slot="{ errors, classes }" name="Nom">
      <input
              type="text"
              id="withoutAccent"
              v-model="withoutAccent"
              class="form-control"
              placeholder="Prenom"
              :class="classes"
      >
      <div v-if="errors" class="invalid-feedback">{{ errors[0] }}</div>
    </ValidationProvider>

  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      withAccent: '',
      withoutAccent: ''
    }
  }
};
</script>

<style>
  #app {
    text-align: center;
  }

  .invalid-feedback {
    color: red;
  }
</style>
