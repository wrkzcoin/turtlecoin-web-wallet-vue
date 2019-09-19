<template>
  <div class="import">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <img src="@/assets/img/swanson/Computing.png" />
        <form @submit.prevent="onSubmit" class="form" style="margin-top:20px;">
          <b-field>
            <b-select
              v-on:input="onSelect"
              name="method"
              placeholder="Select"
              size="is-large"
              icon="wallet"
              expanded
            >
              <option
                v-for="(method, index) in methods"
                :key="index"
                :value="method.index"
              >
                {{ method.name }}</option
              >
            </b-select>
          </b-field>

          <section v-if="showFile">
            <b-field>
              <b-upload v-model="dropFiles" drag-drop>
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon icon="upload" size="is-large"> </b-icon>
                    </p>
                    <p>Drop your wallet here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
          </section>

          <section v-if="showSeed">
            <b-field>
              <BTaginputWithValidation
                rules="required"
                v-model="seedPhrase"
                name="seedPhrase"
                type="is-primary"
                size="is-large"
                allow-duplicates
                v-bind:on-paste-separators="[' ']"
              />
            </b-field>
          </section>

          <section v-if="showKeys">
            <b-field position="is-centered">
              <BInputWithValidation
                rules="required|regex: /^(TRTL)/|max:64"
                type="text"
                v-model="privateViewKey"
                name="privateViewKey"
                ref="privateViewKey"
                size="is-large"
                icon="key"
                placeholder="Private View Key"
              />
            </b-field>

            <b-field position="is-centered">
              <BInputWithValidation
                rules="required|regex: /^(TRTL)/|max:64"
                type="text"
                v-model="privateSpendKey"
                name="privateSpendKey"
                ref="privateSpendKey"
                size="is-large"
                icon="lock"
                placeholder="Private Spend Key"
              />
            </b-field>
          </section>

          <br />

          <b-button
            native-type="submit"
            value="submit"
            type="is-dark is-fullwidth"
            size="is-large"
            >Import</b-button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ValidationObserver } from "vee-validate";

import BInputWithValidation from "../components/inputs/BInputWithValidation.vue";
import BTaginputWithValidation from "../components/inputs/BTaginputWithValidation.vue";

const methods = [
  { index: 1, name: "File", icon: "download" },
  { index: 2, name: "Seed", icon: "fingerprint" },
  { index: 3, name: "Keys", icon: "key" }
];

@Component({
  components: {
    ValidationObserver,
    BInputWithValidation,
    BTaginputWithValidation
  },
  data: function() {
    return {
      methods: methods,
      password: null,
      showFile: false,
      showSeed: false,
      showKeys: false,
      walletFile: null,
      seedPhrase: null,
      privateViewKey: null,
      privateSpendKey: null
    };
  },
  methods: {
    onSelect(i) {
      if (i === 1) {
        this.$data.showFile = true;
        this.$data.showSeed = false;
        this.$data.showKeys = false;
      } else if (i === 2) {
        this.$data.showFile = false;
        this.$data.showSeed = true;
        this.$data.showKeys = false;
      } else if (i === 3) {
        this.$data.showFile = false;
        this.$data.showSeed = false;
        this.$data.showKeys = true;
      }
    },
    onSubmit(e) {
      console.log(e.target.elements.methods.value);
    }
  }
})
export default class importWallet extends Vue {}
</script>
