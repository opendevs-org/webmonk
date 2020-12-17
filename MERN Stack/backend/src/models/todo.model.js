const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        todoDesc: { type: String },
        todoResponsible: { type: String },
        todoPriority: { type: String },
        todoCompleted: { type: Boolean }
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);

module.exports = mongoose.model('todoItem', todoSchema);
