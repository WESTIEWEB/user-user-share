import mongoose from "mongoose";

export const connection = async(url: string) => {
    await mongoose.connect(url)
}