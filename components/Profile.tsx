import IProfileProps from "@interfaces/props/IProfileProps";
import PromptCardList from "./PromptCardList";

const Profile = (props: IProfileProps) => {
  const { name, description, data } = props;
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{description}</p>

      <PromptCardList data={data} customClass="mt-10" />
    </section>
  );
};

export default Profile;
