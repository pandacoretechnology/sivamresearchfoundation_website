import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";

const Button2 = ({ text = "Explore Our Services", href = "/services" }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2.5 border-2 border-white/80 hover:border-white bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
    >
      <SparklesIcon className="w-4 h-4 stroke-[2]" />
      <span>{text}</span>
    </Link>
  );
};

export default Button2;
