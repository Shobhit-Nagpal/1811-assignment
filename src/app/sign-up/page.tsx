import { Button } from "@/components/ui/button";
import { signup } from "./actions";
import { ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 mt-20">
      <Logo />
      <div className="mt-20 flex flex-col items-center justify-center w-full sm:w-1/2 gap-y-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-6xl font-bold text-[#363430] mb-4">Sign up</h1>
          <p className="text-xl text-[#91908F] mb-4">
            Enter the world of no limits.
          </p>
        </div>
        <form className="mb-8 w-full">
          <div className="flex flex-col items-center justify-center mb-4">
            <label htmlFor="email" className="font-medium text-lg text-[#363430] block">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-4">
            <label htmlFor="password" className="font-medium text-lg text-[#363430] block">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="*********"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-4">
            <label htmlFor="confirmedPassword" className="font-medium text-lg text-[#363430] block">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-5/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmedPassword"
              name="confirmedPassword"
              type="password"
              placeholder="*********"
            />
          </div>
          <div className="flex items-center justify-center mt-12">
            <Button
              formAction={signup}
              className="w-5/6 bg-[linear-gradient(to_bottom,#5072EA,#3F5ECD)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#3F5ECD] text-white p-6 text-lg rounded-lg font-bold transition-all hover:bg-pink-700 mb-6"
            >
              Sign up <ChevronRight />
            </Button>
          </div>
        </form>

        <p className="text-[#91908F] text-lg">
          Already have an account?{" "}
          <Link href="/login" className="text-pink font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
