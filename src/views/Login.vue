<template>
  <div class="login">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
      <ul>
          <b-notification
            v-for="(data, address) in wallets"
            v-bind:key="address"
            type="is-primary"
          >
          {{data[1]}}

        </b-notification>
      </ul>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const wallets = Object.entries({...localStorage})

console.log(wallets)

@Component({
  components: {},
   data: function() {
    return {
      wallets: wallets
    };
  },
  methods: {
    getItems() {



    }
  }
})
export default class Login extends Vue {}
</script>
