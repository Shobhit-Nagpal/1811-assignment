import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image src="/mark.svg" alt="Logo" width={27} height={36} />
      <h1 className="font-bold text-3xl text-[#363430] hidden sm:block">
        Creatortools.ai
      </h1>
    </div>
  );
}
