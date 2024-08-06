import { model, Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
	{
		videoFile: {
			type: String,
			required: true,
			trim: true,
		},
		thumbnail: {
			type: String,
			required: true,
			trim: true,
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		duration: {
			type: Number, // Duration in seconds
			required: true,
			min: [1, "Duration must be at least 1 second"],
		},
		views: {
			type: Number,
			required: true,
			default: 0,
			min: [0, "Views cannot be negative"],
		},
		isPublished: {
			type: Boolean,
			required: true,
			default: false,
		},
		owner: {
			type: Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = model("Video", videoSchema);
