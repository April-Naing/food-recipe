"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavLink({ href, name }) {
  const pathname = usePathname();
  return (
    <div className=" top-0 w-full bg-white shadow-md z-10 p-4">
      {/* <li>
          <Image
            src="/logo2.jpg"
            alt="logo"
            width={50}
            height={50}
            className="image"
          />
        </li> */}
      <li
        className={`mx-4 text-xl font-serif ${
          pathname === href ? "text-slate-900" : "text-slate-500"
        }`}
        key={name}
      >
        <Link href={href}>{name}</Link>
      </li>
      {/* <li className="mx-4 text-slate-500 text-xl font-serif">
          <Link href="/recipes">Recipes</Link>
        </li>
        <li className="mx-4 text-slate-500 text-xl font-serif">
          <Link href="/categories">Categories</Link>
        </li> */}
    </div>
  );
}

export default NavLink;
