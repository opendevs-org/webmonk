const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        priority: { type: String },
        completed: { type: Boolean }
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

module.exports = mongoose.model('todoItem', todoSchema);
