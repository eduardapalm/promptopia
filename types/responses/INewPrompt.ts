import { Schema } from 'mongoose';

export default interface INewPrompt {
  prompt: string;
  tag: string;
  userId: Schema.Types.ObjectId;
}
