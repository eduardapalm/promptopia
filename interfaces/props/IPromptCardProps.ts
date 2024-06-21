import IPrompt from "@interfaces/IPrompt";

export default interface IPromptCardProps {
  prompt: IPrompt;
  handleTagClick?: (tag: string) => void;
  handleEdit?: (prompt: IPrompt) => void;
  handleDelete?: (prompt: IPrompt) => void;
}
