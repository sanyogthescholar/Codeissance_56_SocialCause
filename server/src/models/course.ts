import { ICourse } from '../types/icourse';
import { model, Schema } from 'mongoose'

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

    type_: {
        type: String,
        required:true
    }

}, { timestamps: true })


export default model<ICourse>('Course', courseSchema)