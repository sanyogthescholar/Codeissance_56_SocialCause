"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get('/courses', todos_1.getCourses);
router.get('/add-course', todos_1.addCourses);
router.put('/edit-course/:id', todos_1.updateCourses);
//router.delete('/delete-todo/:id', deleteTodo)
exports.default = router;
