// controllers
const SurveyM = require("../models/SurveyFormModels");

exports.getAllSurvey = (req, res) => {
    SurveyM.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "not found", error: err.message })
        );
};




exports.postCreateSurvey = (req, res) => {
  const { name, email, phone, propertyaddress, checkboxResidential, residentialRadio, checkboxCommercial, commercialRadio, checkboxIndustrial, industrialRadio, q2Radio, q3Radio, q4CheckboxNewLook, q4CheckboxIncreaseValue, q4CheckboxCommercializeProperty, q4CheckboxAdditional, q4CheckboxCuriosity, q5Textarea, q6Radio, q7Radio, q8Radio,q9Radio, q9Radio2, q10Radio, q10Textarea, q11Radio, q11Radio2, q12Radio, q12Radio2, q13CheckboxGeneral,  q13CheckboxPricing, q13CheckboxTiming, q14Radio, q15Radio, q15Textarea, q16Radio, q17Radio} = req.body;

  const survey = {
    name: name || "",
    email: email || "",
    phone: phone || "",
      propertyaddress: propertyaddress || "",
      checkboxResidential: checkboxResidential || "",
      residentialRadio: residentialRadio || "",
      checkboxCommercial: checkboxCommercial || "",
      commercialRadio: commercialRadio || "",
      checkboxIndustrial: checkboxIndustrial || "",
      industrialRadio: industrialRadio || "",
      q2Radio: q2Radio || "",
      q3Radio: q3Radio || "",
      q4CheckboxNewLook: q4CheckboxNewLook || "",
      q4CheckboxIncreaseValue: q4CheckboxIncreaseValue || "",
      q4CheckboxCommercializeProperty: q4CheckboxCommercializeProperty || "",
      q4CheckboxAdditional: q4CheckboxAdditional || "",
      q4CheckboxCuriosity: q4CheckboxCuriosity || "",
      q5Textarea: q5Textarea || "",
      q6Radio: q6Radio || "",
      q7Radio: q7Radio || "",
      q8Radio: q8Radio || "",
      q9Radio: q9Radio || "",
      q9Radio2: q9Radio2 || "",
      q10Radio: q10Radio || "",
      q10Textarea: q10Textarea || "",
      q11Radio: q11Radio || "",
      q11Radio2: q11Radio2 || "",
      q12Radio: q12Radio || "",
      q12Radio2: q12Radio2 || "",
      q13CheckboxGeneral: q13CheckboxGeneral || "",
      q13CheckboxPricing: q13CheckboxPricing || "",
      q13CheckboxTiming: q13CheckboxTiming || "",
      q14Radio: q14Radio || "",
      q15Radio: q15Radio || "",
      q15Textarea: q15Textarea || "",
      q16Radio: q16Radio || "",
      q17Radio: q17Radio || "",
  };

  SurveyM.create(survey)
    .then((data) =>
      res.json({ message: "added successfully", data })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add ", error: err.message })
    );
};
  

exports.putUpdateSurvey = (req, res) => {
    SurveyM.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update", error: err.message })
        );
};

exports.deleteSurvey = (req, res) => {
    SurveyM.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};