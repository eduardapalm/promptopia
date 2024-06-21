import { Schema } from "mongoose";

export default interface IUser {
  _id: string;
  username: string;
  email: string;
  image: string;
}
