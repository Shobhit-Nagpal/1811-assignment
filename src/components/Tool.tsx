import Image from "next/image";

type ToolProps = {
  icon: string;
  name: string;
  description: string;
};

export default function Tool({ icon, name, description }: ToolProps) {
  return (
    <div className="flex flex-col items-start justify-center border-solid border-2 border-[#E2E2E2] rounded-lg p-8">
      <Image src={icon} alt="Tool icon" width={40} height={40} className="mb-4" />
      <h3 className="mb-4 font-semibold text-lg text-[#3E3E3E]">{name}</h3>
      <p className="text-[#91908F] text-base">{description}</p>
    </div>
  );
}
