const obj = {
    ref: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date },
    students: { type: Number },
    phase: { type: String },
    course: { type: 'ObjectId', ref: 'Course' },
    status: { type: String, enum: ['Planned', 'Executed', 'Cancelled'] },
    author: { type: 'ObjectId', ref: 'User' },
    examiner: { type: 'ObjectId', ref: 'User' },
    invigilator: { type: 'ObjectId', ref: 'User' },
    questions: [{ type: 'ObjectId', ref: 'Questions' }],
    questionsJSON: { type: String },
};

const parse = {
    ref: '',
    title: '',
    date: '',
    students: 0,
    phase: '',
    course: '',
    status: '', //['Planned', 'Executed', 'Cancelled'] },
    author: '',
    examiner: '',
    invigilator: '',
    questions: [],
    questionsJSON: '',
};
