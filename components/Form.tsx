import Link from "next/link";
import IFormProps from "../types/props/IFormProps";

const Form = (props: IFormProps) => {
  const { type, post, setPost, submitting, handleSubmit } = props;
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let you imagination
        run wild with any AI-Powered platform.
      </p>

      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(evt) => setPost({ ...post, prompt: evt.target.value })}
            className="form_textarea"
            placeholder="Write your prompt here..."
            required
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="text-xs font-extralight text-gray-400">
              (#product, #webDevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(evt) => setPost({ ...post, tag: evt.target.value })}
            className="form_input"
            required
            placeholder="#tag"
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
