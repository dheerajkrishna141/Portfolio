import { useState } from "react";

interface Props {
  children?: string;
}
const ExpandableText = ({ children }: Props) => {
  const [click, setClick] = useState(false);
  if (!children) return null;
  if (children.length <= 250) return <>{children}</>;
  else {
    const substring = children.substring(0, 250) + " ...";

    return (
      <>
        {click ? children : substring}
        {"  "}
        <button
          className="border-[1px] border-neutral-600 rounded-xl px-2 py-[1px] text-sm cursor-pointer bg-purple-500"
          onClick={() => setClick(!click)}
        >
          {click ? "Show Less" : "Show More"}
        </button>
      </>
    );
  }
};

export default ExpandableText;
