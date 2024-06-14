import Suggestion from "@/models/suggestion";
import dbConnect from "@/utils/dbConnect";


export const POST=async(req,res)=>{
     try {
        await dbConnect();
        const {suggestionID,userID} =await req.json();

        if (!suggestionID || !userID) {
            return Response.json({ message: "Invalid request" }, { status: 400 });
        }

         const suggestion= await Suggestion.findById(suggestionID);
         if (!suggestion.likedby.includes(userID)) {
            suggestion.likes++;
            suggestion.likedby.push(userID);
            await suggestion.save();
          }
          return Response.json({message:"Vote Submited Successfully"},{status:200});
     } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
     }
}