import * as VeeValidate from "vee-validate";
import { defineRule, ErrorMessage } from "vee-validate";
import { required } from "@vee-validate/rules";

export default {
  install: (app) => {
    app.component("vee-form", VeeValidate.Form);
    app.component("vee-field", VeeValidate.Field);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
  },
};
