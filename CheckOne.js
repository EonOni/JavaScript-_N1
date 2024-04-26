const mongoose = require('mongoose');

// Определение схемы для группы
const StudyGroupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    students: [String], // Массив студентов
    schedule: [String]  // Массив расписания
});

// Модель для группы
const StudyGroup = mongoose.model('StudyGroup', StudyGroupSchema);

module.exports = StudyGroup;