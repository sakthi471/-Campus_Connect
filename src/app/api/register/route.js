import User from "@/models/user";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcryptjs";

export const POST = async (req, res) => {
    try {
        const { username, password } = await req.json();
        console.log(username, password);
        await dbConnect();
        const user = await User.findOne({ username })
        if (user) {
            return Response.json({
                success: false,
                message: "Username already exists",
            });
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = {
            username,
            password:hashedPassword,
        };

        await User.create(newUser)

        return Response.json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.log(error);
        return Response.json({
            success: false,
            message: error.message|| "An error occurred while creating the user.",
        },{status: 500});
    }
}


