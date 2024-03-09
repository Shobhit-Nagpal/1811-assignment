import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full my-10 px-12 sm:px-20">
      <div className="flex items-center justify-center gap-4">
      <Image src="/mark.svg" alt="Logo" width={27} height={36} />
      <h1 className="font-bold text-3xl text-[#363430] hidden sm:block">Creatortools.ai</h1>
      </div>

      <div>
        <Button variant="outline" className="text-lg font-bold"><Image src="/user.svg" alt="User icon" width={20} height={20} className="mx-1"/>Log in</Button>
      </div>
    </div>
  );
}
