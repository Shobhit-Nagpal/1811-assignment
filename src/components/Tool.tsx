import Image from "next/image";

type ToolProps = {
  icon: string;
  name: string;
  description: string;
  url: string;
  onClick: (url: string)=> void;
};

export default function Tool({ icon, name, description, url, onClick }: ToolProps) {
  return (
    <div className="hover:cursor-pointer hover:bg-[#F5F5F5] flex flex-col items-start justify-center border-2 border-solid border-[#E2E2E2] rounded-lg px-12 py-8" onClick={() => onClick(url)}>
      <Image src={icon} alt="Tool icon" width={40} height={40} className="mb-4" />
      <h3 className="mb-4 font-semibold text-lg text-[#3E3E3E]">{name}</h3>
      <p className="text-[#91908F] text-base">{description}</p>
    </div>
  );
}
