import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
})
let module: any
export default mongoose.model('Posts', PostSchema)
