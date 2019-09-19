import { required, confirmed, regex, max } from "vee-validate/dist/rules";
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

extend("regex", {
  ...regex,
  message: "Not a valid TRTL address"
});

extend("max", {
  ...required,
  message: "This field is required"
});
