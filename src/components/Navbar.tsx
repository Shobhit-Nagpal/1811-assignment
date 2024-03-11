import Image from "next/image";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-5/6 my-10 px-12 sm:px-20">
      <Logo />
      <div>
        <Button variant="outline" className="text-lg font-bold">
          <Image
            src="/user.svg"
            alt="User icon"
            width={20}
            height={20}
            className="mx-1"
          />
          Log in
        </Button>
      </div>
    </div>
  );
}
