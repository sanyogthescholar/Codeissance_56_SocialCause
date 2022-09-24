"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourses = exports.addCourses = exports.getCourses = void 0;
const course_1 = __importDefault(require("../../models/course"));
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.default.find();
        res.status(200).json({ courses });
    }
    catch (error) {
        throw error;
    }
});
exports.getCourses = getCourses;
const addCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const body = req.body as Pick<ICourse, 'name' | 'url' | 'id'>
        //console.log(body)
        console.log(req.query);
        const course = new course_1.default({
            name: req.query.name,
            description: req.query.description,
            link: req.query.link,
            type_: req.query.type_
        });
        const newTodo = yield course.save();
        const allTodos = yield course_1.default.find();
        res.status(201).json({ message: 'Course added', todo: newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.addCourses = addCourses;
const updateCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield course_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTodos = yield course_1.default.find();
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCourses = updateCourses;
