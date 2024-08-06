import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const uploadOnCloudinary = async (localFilePath) => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});

	try {
		if (localFilePath) {
			const { url } = await cloudinary.uploader.upload(localFilePath, {
				resource_type: "auto",
			});
			return url;
		}
	} catch (error) {
		fs.unlinkSync(localFilePath);
	}
};
