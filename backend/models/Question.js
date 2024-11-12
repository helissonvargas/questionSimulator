const mongoose = require('../db/conn');
const {Schema} = mongoose;

const Question = mongoose.model(
    'Question',
    new Schema(
        {
            subject: {
                type: String,
                required: true,
            },
            questionText: {
                type: String,
                required: true,
            },
            options: [
                {
                  answerText: { type: String, required: true },
                  isCorrect: { type: Boolean, required: true, default: false },
                },
            ],
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
        }, { timestamps: true }),
)

module.exports = Question