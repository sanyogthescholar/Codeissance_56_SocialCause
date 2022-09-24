import { Document } from 'mongoose'

export interface ICourse extends Document {
    name: string
    description: string
    link: string
    type_: string
}