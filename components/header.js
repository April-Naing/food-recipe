import Image from "next/image";
import Link from "next/link";

function HeaderImg() {
  return (
    <div className="relative w-full h-screen">
      <Image
        fill={true}
        src="/meal.jpg"
        alt="Food Logo"
        priority
        className="h-full"
      />
      <div className="absolute bottom-1/3 left-1/2  ">
        <h1 className=" text-slate-500 text-6xl font-bold font-serif">
          Simple and Tasty Recipe
        </h1>
        <div className="mt-8">
          <button className="font-serif bg-slate-600 opacity-75 hover:bg-slate-500 rounded-md px-4 py-2">
            <Link href="/recipes">Explore Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderImg;
