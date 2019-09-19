<template>
  <div id="app">
    <Navigation></Navigation>

    <div class="container">
      <b-loading
        ref="loading"
        :is-full-page="isFullPage"
        :active.sync="isLoading"
      ></b-loading>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      isLoading: false,
      isFullPage: true
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
