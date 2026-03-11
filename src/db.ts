//create user models and schemas
import mongoose,{model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://Srikar:FOlKGYH97w1XNB6l@cluster0.prvpyv8.mongodb.net/")
const UserSchema=new Schema({
    username: { type:String, unique: true},
    password: String
})

export const UserModel = model("User",UserSchema);
