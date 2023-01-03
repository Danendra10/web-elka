// Next Js import
import Link from "next/link";
// import NextImage from "next/image";
import { useRouter } from "next/router";
// import { Menu, Transition } from "@headlessui/react";

// From defined utils
import { HeaderMenu } from "@/utils/menus.js";



export default function Header() {
  const router = useRouter();
  return (
    <header className="absolute top-0 right-[160px] z-50 col-span-11 flex flex-wrap items-center justify-between border-slate-600 bg-[#0B0D3C] font-monsterrat text-sm">
      <ul className="hidden lg:block">
        {HeaderMenu.map(function (item, index) {
          return (
            <Link href={item.url} key={index}>
              <li
                className={`z-10 inline-block w-32 cursor-pointer px-5 py-5 hover:bg-black hover:bg-opacity-20 md:opacity-50 lg:opacity-100 ${
                  router.pathname == item.link ? "bg-black bg-opacity-20" : ""
                }`}
              >
                <a className="text-white">{item.title}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </header>
  );
}
