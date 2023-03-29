import dotenv from 'dotenv';
dotenv.config()

export const JWT_SECRET = process.env.JWT_SECRET!;
export const CLOUDINARY_NAME = process.env.CLOUD_NAME!;
export const CLOUDINARY_API_KEY = process.env.CLOUD_API_KEY!;
export const CLOUDINARY_API_SECRET = process.env.CLOUD_API_SECRET!;