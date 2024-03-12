import { Button } from "./ui/button";

export default function SubscribeCTA() {
  return (
    <div className="w-full mt-16 px-8 sm:px-16 md:px-32 py-16 flex flex-col justify-center lg:flex-row items-center md:justify-around bg-[#FFFAFB] border-2 border-solid border-[#E2E2E2] drop-shadow-[0px_0px_8px_rgba(166,166,166,0.14)] rounded-lg gap-x-10 gap-y-4">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#0B132A] mb-5 text-center lg:text-left">
          Want to know more about the tools?
        </h2>
        <p className="text-[#91908F] text-base text-center">
          Join the club and explore all the free tools...
        </p>
      </div>
      <div className="lg:w-1/2 text-right">
        <Button className="bg-[linear-gradient(to_bottom,#FF81AC,#FF3F80)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#FF81AC] text-white px-10 py-8 md:px-12 md:py-8 text-2xl rounded-lg font-bold transition-all hover:bg-pink-700">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
