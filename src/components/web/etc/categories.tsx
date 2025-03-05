import Image from "next/image";
import Link from "next/link";

export const CategoriesTabs = () => {
  return (
    <section className="space-y-4 w-full px-2 mt-1 mb-4">
      <div className="w-full flex items-center gap-x-2">
        <p className="text-4xl font-bold text-pink-600">|</p>
        <h2 className="text-3xl font-bold">Categories</h2>
      </div>

      <div className="grid grid-cols-2 w-full px-2 gap-4">
        <Link
          href="/love"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            src="/assets/images/love.png"
            alt="love"
            width={500}
            height={500}
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              Love <br /> (40)
            </p>
          </div>
        </Link>
        <Link
          href="/movies-tv"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            alt="love"
            width={500}
            height={500}
            src="/assets/images/movies.png"
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              Movies <br /> (40)
            </p>
          </div>
        </Link>
        <Link
          href="/psychology"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            alt="love"
            width={500}
            height={500}
            src="/assets/images/physcology.png"
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              Psychology <br /> (40)
            </p>
          </div>
        </Link>
        <Link
          href="/games"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            alt="love"
            width={500}
            height={500}
            src="/assets/images/games.png"
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              Games <br /> (40)
            </p>
          </div>
        </Link>
        <Link
          href="/entertainment"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            alt="love"
            width={500}
            height={500}
            src="/assets/images/entertainment.png"
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              Entertainment <br /> (40)
            </p>
          </div>
        </Link>
        <Link
          href="/image-lab"
          className="w-full h-full block relative rounded-md col-span-1"
        >
          <Image
            alt="love"
            width={500}
            height={500}
            src="/assets/images/image-lab.png"
            className="w-full h-full aspect-square rounded-md"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
            <p className="text-center text-2xl font-bold text-white">
              ImageLab <br /> (40)
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};
