import { required, confirmed, is } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("confirmed", {
  ...confirmed,
  message: "The password does not match"
});

extend("seed", {
  ...confirmed,
  message: "The backup phrase does not match"
});
