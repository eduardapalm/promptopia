import IUser from "./IUser";

export default interface IPrompt {
  _id: string;
  createdBy: IUser;
  prompt: string;
  tag: string;
  createdAt: Date;
}
