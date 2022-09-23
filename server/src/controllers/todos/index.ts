import { Response, Request } from 'express'
import { ICourse } from '../../types/icourse'
import Course from '../../models/course'

const getCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        const courses: ICourse[] = await Course.find()
        res.status(200).json({ courses })
    } catch (error) {
        throw error
    }
}

const addCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        //const body = req.body as Pick<ICourse, 'name' | 'url' | 'id'>
        //console.log(body)
        console.log(req.query)
        const course: ICourse = new Course({
            name: req.query.name,
            url: req.query.url,
            id: req.query.id,
        }) 

        const newTodo: ICourse = await course.save()
        const allTodos: ICourse[] = await Course.find()

        res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos })
    } catch (error) {
        throw error
    }
}

const updateCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: ICourse | null = await Course.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTodos: ICourse[] = await Course.find()
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}

/*const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos: Course[] = await Course.find()
        res.status(200).json({
            message: 'Todo deleted',
            todo: deletedTodo,
            todos:allTodos,
        })
    } catch (error) {
        throw error
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }*/
export { getCourses, addCourses, updateCourses }