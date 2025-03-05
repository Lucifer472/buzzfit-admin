import { category } from "@/constant";
import Link from "next/link";

export const Slider = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="overflow-x-scroll py-4 px-2 w-full flex items-center justify-start gap-x-4">
        {category.map((c) => (
          <Link
            href={"/" + c.link}
            key={c.label}
            className="block px-6 flex-shrink-0 cursor-pointer hover:bg-pink-600 hover:text-white transition py-2 border-2 text-pink-600 font-bold rounded-full border-pink-400"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
