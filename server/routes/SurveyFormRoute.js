// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    getAllSurvey,
    postCreateSurvey,
    putUpdateSurvey,
    deleteSurvey,
} = require("../controllers/SurveyFormControllers");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllSurvey);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateSurvey);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateSurvey);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteSurvey);

module.exports = router;