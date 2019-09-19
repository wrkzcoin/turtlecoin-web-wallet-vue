<template>
  <b-navbar height="100px">
    <template slot="brand">
      <b-navbar-item href="/">
        <img src="@/assets/img/logo.png" width="auto" height="50" />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="load">
            Load
          </a>
          <a class="button is-primary" href="create">
            Create
          </a>
          <a class="button is-primary" href="import">
            Import
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
