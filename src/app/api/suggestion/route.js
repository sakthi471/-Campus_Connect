import Suggestion from "@/models/suggestion";
import dbConnect from "@/utils/dbConnect"



export const GET=async(req,res)=>{
    try {
        await dbConnect();
        const suggestions = await Suggestion.find({}).sort({ likes: -1 });
        return Response.json(suggestions, { status: 200 });
    } catch (error) {
        console.log(error.message);
        return Response.json({ message: error.message }, { status: 500 });
    }
}


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