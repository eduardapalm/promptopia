import IPromptCardList from "../interfaces/props/IPromptCardListProps";
import PromptCard from "./PromptCard";

const PromptCardList = (props: IPromptCardList) => {
  const { data } = props;
  return (
    <section>
      {data.map((prompt) => (
        <PromptCard key={prompt._id.toString()} prompt={prompt} />
      ))}
    </section>
  );
};

export default PromptCardList;
