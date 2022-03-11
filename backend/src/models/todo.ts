import mongoose from 'mongoose';

const PostSchema: any = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});

export default mongoose.model('Todos', PostSchema);
