<template>
  <div class="Home">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <b-field label="Message">
          <b-input ref="output" type="textarea">{{ output }}</b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//Connect to network
import { WalletBackend, Daemon, IDaemon } from "turtlecoin-wallet-backend";
const daemon: IDaemon = new Daemon("blockapi.turtlepay.io", 443);

@Component({
  components: {},
  data: function() {
    return {
      output: null
    };
  },
  methods: {
    onSubmit(e) {}
  },
  async created() {
    //Redirect to Load
    if (sessionStorage.length <= 0) {
      this.$router.push("/load");
    } else {

      // Grab encrypted wallet string based on session load
      const encryptedString = JSON.parse(
        localStorage.getItem(sessionStorage.getItem("wallet") || "") || ""
      );

      // Open the wallet
      const [wallet, error] = WalletBackend.openWalletFromEncryptedString(
        daemon,
        encryptedString.data,
        sessionStorage.getItem("password") || ""
      );

      if (error) {
        console.log("Failed to load wallet: " + error.toString());
      } else if(wallet) {

        await wallet.start();

        console.log(wallet);

        this.$data.output = wallet.toString();
      }
    }
  }
})
export default class Home extends Vue {}
</script>
