import { Router } from 'express'
import { getCourses, addCourses, updateCourses } from '../controllers/todos'
 
const router: Router = Router()

router.get('/courses', getCourses)

router.get('/add-course', addCourses)

router.put('/edit-course/:id', updateCourses)

//router.delete('/delete-todo/:id', deleteTodo)

export default router
