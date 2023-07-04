const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  propertyaddress: {
    type: String,
  },
  checkboxResidential: {
    type: Boolean,
    default: false,
  },
  residentialRadio: {
    type: String,
  },
  checkboxCommercial: {
    type: Boolean,
    default: false,
  },
  commercialRadio: {
    type: String,
  },
  checkboxIndustrial: {
    type: Boolean,
    default: false,
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
