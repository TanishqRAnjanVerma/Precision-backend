import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect(
            "mongodb+srv://tanishqranjanverma68:7666Verma@cluster0.lc0ij.mongodb.net/Precision"
        )
        .then(() => console.log("DB Connected"));
};
