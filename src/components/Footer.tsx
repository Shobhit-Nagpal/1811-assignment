export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-[#F9FAFB] my-16 px-12 py-6 gap-y-6">
      <div>
        <p className="text-[#667085] text-center">&copy; 1811 Labs. All rights reserved.</p>
      </div>
      <div className="text-[#667085] flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3">
        <p>Privacy Policy</p>
        <p className="text-center">Terms and Conditions</p>
      </div>
    </div>
  );
}
