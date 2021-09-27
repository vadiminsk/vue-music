/* eslint-disable camelcase */
import * as VeeValidate from "vee-validate";
import { defineRule, ErrorMessage } from "vee-validate";
// eslint-disable-next-line object-curly-newline
import { required, email, min, max, alpha_spaces } from "@vee-validate/rules";

export default {
  install: (app) => {
    app.component("vee-form", VeeValidate.Form);
    app.component("vee-field", VeeValidate.Field);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alpha_spaces);
  },
};
