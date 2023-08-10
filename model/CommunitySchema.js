import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		contnet: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

const Community = mongoose.model('Community', communitySchema);
export { Community };
