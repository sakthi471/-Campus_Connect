import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { authConfig } from "./auth.config";



const login = async (credentials) => {
    try {

        await dbConnect()
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            throw new Error("No user found with this username")
        }

        const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordMatch) {
            throw new Error("Password is incorrect")
        }

        return user;

    } catch (error) {
        console.log(error);
        throw new Error("Faild to login. Please try again later.")
    }

}


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {

                    console.log(error);
                    return null;

                }
            }
        })

    ],
    callbacks: {
        ...authConfig.callbacks,
    }

})