const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionBodySchema = new Schema({
  questionType: {
    type: String,
    enum: ['SHORT_ANSWER', 'MULTIPLE_CHOICE'],
  },
  body: String,
  answer: String,
  answer_options: [String], // will be empty for SA
});

const questionSchema = new Schema({
  author: String,
  tossup: {
    questionType: {
      type: String,
      enum: ['SHORT_ANSWER', 'MULTIPLE_CHOICE'],
    },
    body: String,
    answer: String,
    answer_options: [String], // will be empty for SA
  },
  bonus: {
    questionType: {
      type: String,
      enum: ['SHORT_ANSWER', 'MULTIPLE_CHOICE'],
    },
    body: String,
    answer: String,
    answer_options: [String], // will be empty for SA
  },
  category: {
    type: String,
    enum: ['BIOLOGY', 'CHEMISTRY', 'EARTH_SPACE', 'ENERGY', 'MATH', 'PHYSICS'],
  },
});
