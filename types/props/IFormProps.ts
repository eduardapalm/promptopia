import { FormEventHandler } from "react";
import { IPost } from "../IPost";

export default interface IFormProps {
  type: string;
  post: IPost;
  setPost: (post: IPost) => void;
  submitting: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}
