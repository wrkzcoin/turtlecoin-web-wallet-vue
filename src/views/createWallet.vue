<template>
  <div class="create">

    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <ValidationObserver v-slot="{ invalid, passes }">
          <form @submit.prevent="onSubmit" class="form">
            <b-steps v-on:change="onStep">
              <b-step-item label="Generate" icon="gesture">
                <p class="is-size-3">Create New Wallet</p>
                <p class="is-size-5">Each address is randomly generated</p>

                <div v-html="avatar"></div>

                <section>
                  <b-field position="is-centered">
                    <b-input size="is-large" v-model="address"> </b-input>
                    <p class="control">
                      <b-button type="is-primary" size="is-large">
                        <b-icon
                          icon="clipboard"
                          size="is-small"
                          type="is-white"
                          v-clipboard:copy="address"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                        >
                        </b-icon>
                      </b-button>
                    </p>
                  </b-field>
                </section>
              </b-step-item>

              <b-step-item label="Secure" icon="lock">
                <p class="is-size-3">Create New Wallet</p>
                <p class="is-size-5">
                  Account will be stored locally on your device
                </p>

                <br />
                <section>
                  <b-field position="is-centered">
                    <BInputWithValidation
                      persist
                      rules="required"
                      type="text"
                      vid="name"
                      v-model="name"
                      name="name"
                      ref="name"
                      size="is-large"
                      icon="wallet"
                      placeholder="Name"
                    />
                  </b-field>

                  <b-field position="is-centered">
                    <BInputWithValidation
                      persist
                      rules="required"
                      type="password"
                      vid="password"
                      v-model="password"
                      name="password"
                      size="is-large"
                      icon="key"
                      placeholder="Password"
                      password-reveal
                    />
                  </b-field>

                  <b-field position="is-centered">
                    <BInputWithValidation
                      persist
                      rules="required|confirmed:password"
                      type="password"
                      vid="repeat"
                      v-model="repeat"
                      name="repeat"
                      size="is-large"
                      icon="repeat"
                      placeholder="Confirm"
                      password-reveal
                    />
                  </b-field>
                </section>
              </b-step-item>

              <b-step-item label="Backup" icon="fingerprint">
                <p class="is-size-3">Create New Wallet</p>
                <p class="is-size-5">
                  Please carefully write down this backup phrase
                </p>

                <br />

                <section>
  
                    <BTaginputWithValidation
                      persist
                      v-model="mnemonics"
                      ref="mnemonics"
                      name="mnemonics"
                      vid="mnemonics"
                      type="is-primary"
                      size="is-large"
                      allow-duplicates
                      :closable=false
                      readonly
                    />
                    <br />

                  <b-button
                    type="is-dark is-fullwidth is-outlined"
                    size="is-medium"
                    icon-left="clipboard"
                    v-clipboard:copy="mnemonics"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    >Copy to Clipboard
                  </b-button>
                </section>
              </b-step-item>

              <b-step-item label="Verify" icon="check">
                <p class="is-size-3">Create New Wallet</p>
                <p class="is-size-5">
                  Please verify your backup phrase rewriting it here.
                </p>

                <br />

                <section>
                  <b-field>

                    <BTaginputWithValidation
                      autofocus
                      persist
                      rules="required|seed:mnemonics"
                      v-model="confirm"
                      ref="confirm"
                      name="confirm"
                      type="is-primary"
                      size="is-large"
                      allow-duplicates
                      v-bind:on-paste-separators="[',']"
                    />
        
                  </b-field>

                    <br />

                  <b-button
                    @click="openLoading"
                    native-type="submit"
                    value="submit"
                    type="is-dark is-outlined is-fullwidth"
                    size="is-large"
                    :disabled="invalid"
                    >Confirm</b-button
                  >
                </section>
              </b-step-item>
            </b-steps>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ValidationObserver } from "vee-validate";
import BInputWithValidation from "../components/inputs/BInputWithValidation.vue";
import BTaginputWithValidation from "../components/inputs/BTaginputWithValidation.vue";

//Connect to Wallet
import { WalletBackend, Daemon, IDaemon } from "turtlecoin-wallet-backend";
import jdenticon from "jdenticon";

const daemon: IDaemon = new Daemon("blockapi.turtlepay.io", 443);

const wallet: WalletBackend = WalletBackend.createWallet(daemon);

// Get address
const address = wallet.getPrimaryAddress();

// Generate jDenticon avatar
const avatar = jdenticon.toSvg(address, 300);

// Get Mnenomics
let mnemonicsArray: any
const [mnemonics, mnemonicsError] = wallet.getMnemonicSeed()

if(mnemonics) {
  mnemonicsArray= mnemonics.trim().split(" ")
}

@Component({
  props: {
   isLoading: {
    type: String,
    required: true
   }
  },
  components: {
    ValidationObserver,
    BInputWithValidation,
    BTaginputWithValidation
  },
  data: function() {
    return {
      isLoading: true,
      isFullPage: true,
      address: address,
      avatar: avatar,
      name: null,
      password: null,
      repeat: null,
      mnemonics: mnemonicsArray,
      confirm: null,
      invalid: true,
      passes: false
    };
  },

  methods: {
    onStep: function(s) {
      console.log(s)
      //Autofocus on name input if step = 1
      if(s === 1) {
  
      } else if(s === 3) {

      }
    },
    onCopy: function(e) {
      this.$buefy.toast.open({
        message: "Copied to Clipboard",
        type: "is-success"
      });
    },
    onError: function(e) {
      this.$buefy.toast.open({
        message: "Failed to copy to Clipboard",
        type: "is-danger"
      });
    },
    openLoading() {
      
    },
    onSubmit(e) {

      const name = e.target.elements.name.value
      const data = wallet.encryptWalletToString(e.target.elements.password.value);

      console.log(data)
       
      // create wallet object store
      const store = JSON.stringify({
        name: name,
        address: address,
        data: data
      });

      console.log(store)

      localStorage.setItem(name, store);

      console.log("stored");
      this.$router.push("/login");
    }
  },
  watch: {
    
  }
})
export default class createWallet extends Vue {}
</script>
