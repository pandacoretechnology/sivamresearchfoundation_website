import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Button = ({ text = "Book Free Consultation", href = "/contact" }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2.5 bg-[#15bf5f] hover:bg-[#12a953] text-gray-950 font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
    >
      <span>{text}</span>
      <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
    </Link>
  );
};

export default Button;
