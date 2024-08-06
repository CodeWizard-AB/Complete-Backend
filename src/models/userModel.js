import { model, Schema, Types } from "mongoose";
import bcryptjs from "bcryptjs";
import jsonwebToken from "jsonwebtoken";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
			unique: true,
			index: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			index: true,
		},
		fullName: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		avatar: {
			type: String,
			required: true,
			trim: true,
		},
		coverImage: {
			type: String,
			required: true,
			trim: true,
		},
		watchHistory: [
			{
				type: Types.ObjectId,
				ref: "Video",
			},
		],
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = bcryptjs.hash(this.password, 10);
		next();
	}
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
	return jsonwebToken.sign(
		{
			_id: this._id,
			email: this.email,
			username: this.username,
			fullName: this.fullName,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
	);
};

userSchema.methods.generateRefreshToken = function () {
	return jsonwebToken.sign(
		{ _id: this._id },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
	);
};

export const User = model("User", userSchema);
