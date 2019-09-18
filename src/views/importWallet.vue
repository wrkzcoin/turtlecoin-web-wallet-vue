<template>
  <div class="import">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
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
              icon="key"
              placeholder="Private Spend Key"
            />
          </b-field>
        </section>

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


const methods = [{ index: 1, name: "Keys", icon: "key" }, { index: 2, name: "Seed", icon: "fingerprint" }, { index: 3, name: "JSON", icon: "code" }, { index: 4, name: "Encrypted String", icon: "https" }, { index: 5, name: "File", icon: "download" }, ]


@Component({
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  data: function() {
    return {
      methods: methods,
      password: null,
      showKeys: false,
      showSeed: false,
      showJSON: false,
      showEncrypted: false,
      showFile: false,
      privateViewKey: null,
      privateSpendKey: null,

    };
  },
  methods: {
    onSelect(i) {
      if(i === 1) {
        this.$data.showKeys = true;
      }
    },
    onSubmit(e) {
      console.log(e.target.elements.methods.value)
    }
  }
})
export default class importWallet extends Vue {}
</script>
