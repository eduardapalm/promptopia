import { Schema } from "mongoose";

export default interface IUser {
  id: Schema.Types.ObjectId;
  username: string;
  email: string;
  image: string;
}
