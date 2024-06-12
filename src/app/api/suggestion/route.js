import Suggestion from "@/models/suggestion";
import dbConnect from "@/utils/dbConnect"

export const POST = async (req, res) => {

    try {
        await dbConnect();
        const { title, content, userID } = await req.json();

        const suggestion = new Suggestion({
            author: userID,
            title: title,
            content: content,
            likedby: [userID], // Insert who created the suggestion into likedBy
        });
        suggestion.likes++;
        // Increment the likes count

        await suggestion.save();
        
        return Response.json({ message: "Suggestion created successfully" }, { status: 201 })


    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })

    }

}