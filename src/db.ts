//create user models and schemas
import mongoose,{model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://Srikar:FOlKGYH97w1XNB6l@cluster0.prvpyv8.mongodb.net/")


const UserSchema=new Schema({
    username: { type:String, unique: true},
    password: String
})
const ContentSchema=new Schema({
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }], // Array of tag IDs, referencing the 'tag' collection
    userId: [{ 
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        required: true                       // The 'userId' field is mandatory to link content to a user
    }],



})
export const ContentModel=model("Content",ContentSchema)

export const UserModel = model("User",UserSchema);
