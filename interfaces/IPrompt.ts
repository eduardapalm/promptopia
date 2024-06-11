import IUser from "./IUser";

export default interface IPrompt {
  createdBy: IUser;
  prompt: string;
  tag: string;
  createdAt: Date;
}
