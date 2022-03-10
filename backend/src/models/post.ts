import * as mongoose from 'mongoose';

const PostSchema : any = new mongoose.Schema({
	todo: {
		type: String,
		required: true
	}
});

export default mongoose.model('Posts', PostSchema);
