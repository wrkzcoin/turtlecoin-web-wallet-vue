<template>
  <div class="home">
    <b-button @click="clickMe">Click Me</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
})
export default class Home extends Vue {}
</script>
