import IPrompt from "@interfaces/IPrompt";

export default interface IProfileProps {
  name: string;
  description: string;
  data: IPrompt[];
}
