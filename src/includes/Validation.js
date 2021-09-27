/* eslint-disable camelcase */
import * as VeeValidate from "vee-validate";
import { defineRule, ErrorMessage } from "vee-validate";
// eslint-disable-next-line object-curly-newline
import {
  required,
  email,
  min,
  max,
  alpha_spaces,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

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
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("confirmed", confirmed);
    defineRule("excluded", excluded);
  },
};
