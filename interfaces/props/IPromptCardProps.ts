import IPrompt from "@interfaces/IPrompt";

export default interface IPromptCardProps {
  prompt: IPrompt;
  handleTagClick?: (tag: string) => void;
}
