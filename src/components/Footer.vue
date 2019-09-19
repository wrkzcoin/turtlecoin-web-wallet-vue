<template>
  <b-navbar fixed-bottom type="is-dark" wrapper-class="container">
    <template slot="start">
      <b-tooltip label="Remote Node">
        <b-field style="margin-top: 10px;">
          <b-select icon="dns">
            <option selected value="1">TurtlePay</option>
            <option value="2">Option 2</option>
          </b-select>
        </b-field>
      </b-tooltip>
    </template>

    <template slot="end">
      <b-navbar-item tag="div"> </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>
