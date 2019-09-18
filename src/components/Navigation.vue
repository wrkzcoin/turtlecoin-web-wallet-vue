<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item href="/">
        <img src="@/assets/logo.png" width="auto" height="50" />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="login">
            Login
          </a>
          <a class="button is-light" href="create">
            Create Address
          </a>
          <a class="button is-light" href="import">
            Import Address
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  @Prop() private msg!: string;
}
</script>
