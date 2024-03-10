import { Button } from "./ui/button";

export default function SubscribeCTA() {
  return (
    <div className="max-w-7xl mt-16 px-32 py-16 flex items-center justify-around bg-[#FFFAFB] border-2 border-solid border-[#E2E2E2] drop-shadow-[0px_0px_8px_rgba(166,166,166,0.14)] gap-x-96 rounded-lg">
      <div>
        <h2 className="text-4xl font-semibold text-[#0B132A] mb-5">Want to know more about the tools?</h2>
        <p className="text-[#91908F] text-base">Join the club and explore all the free tools...</p>
      </div>
      <div>
        <Button className="bg-[linear-gradient(to_bottom,#FF81AC,#FF3F80)] drop-shadow-[0px_0px_0px_rgba(169,18.69,1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.14)] shadow-[0px_-2px_1px{rgba(0,0,0,.14)}] border-2 border-solid border-[#FF81AC] text-white px-12 py-8 text-2xl rounded-lg font-bold transition-all hover:bg-pink-700">Subscribe</Button>
      </div>
    </div>
  );
}
