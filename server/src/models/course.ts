import { ICourse } from '../types/icourse';
import { model, Schema } from 'mongoose'

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    }

}, { timestamps: true })


export default model<ICourse>('Course', courseSchema)