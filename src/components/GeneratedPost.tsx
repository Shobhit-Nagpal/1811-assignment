import Tag from "./Tag";
import Image from "next/image";

type GeneratedPostProps = {
  icon: string;
  title: string;
  content: string;
  tags: string[];
};

export default function GeneratedPost({
  icon,
  title,
  content,
  tags,
}: GeneratedPostProps) {
  return (
    <div className="flex flex-col items-start justify-center border-2 border-solid border-[#E2E2E2] rounded-lg px-4 py-8 gap-5">
      <Image src={icon} alt="Post icon" width={42} height={42} />
      <h1 className="text-4xl font-semibold text-[#363430]">{title}</h1>
      <p className="text-xl text-[#667085]">{content}</p>
      <div className="flex items-center justify-center gap-2">
      {tags.map((tag, idx) => (
        <Tag key={idx} name={tag} color={"blue"} />
      ))}
      </div>
    </div>
  );
}
