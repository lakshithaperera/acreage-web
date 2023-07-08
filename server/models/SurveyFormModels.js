const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  propertyaddress: {
    type: String,
  },
  checkboxResidential: {
    type: String,
  },
  residentialRadio: {
    type: String,
  },
  checkboxCommercial: {
    type: String,
  },
  commercialRadio: {
    type: String,
  },
  checkboxIndustrial: {
    type: String,
  },
  industrialRadio: {
    type: String,
  },
  q2Radio: {
    type: String,
  },
  q3Radio: {
    type: String,
  },
  q4CheckboxNewLook: {
    type: String,
  },
  q4CheckboxIncreaseValue: {
    type: String,
  },
  q4CheckboxCommercializeProperty: {
    type: String,
  },
  q4CheckboxAdditional: {
    type: String,
  },
  q4CheckboxCuriosity: {
    type: String,
  },
  q5Textarea: {
    type: String,
  },
  q6Radio: {
    type: String,
  },
  q7Radio: {
    type: String,
  },
  q8Radio: {
    type: String,
  },
  q9Radio: {
    type: String,
  },
  q9Radio2: {
    type: String,
  },
  q10Radio: {
    type: String,
  },
  q10Textarea: {
    type: String,
  },
  q11Radio: {
    type: String,
  },
  q11Radio2: {
    type: String,
  },
  q12Radio: {
    type: String,
  },
  q12Radio2: {
    type: String,
  },
  q13CheckboxGeneral: {
    type: String,
  },
  q13CheckboxPricing: {
    type: String,
  },
  q13CheckboxTiming: {
    type: String,
  },
  q14Radio: {
    type: String,
  },
  q15Radio: {
    type: String,
  },
  q15Textarea: {
    type: String,
  },
  q16Radio: {
    type: String,
  },
  q17Radio: {
    type: String,
  }
});

const SurveyM = mongoose.model("survey", SurveySchema);

module.exports = SurveyM;
