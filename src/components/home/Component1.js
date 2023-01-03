import Link from "next/link";
import NextImage from "next/image";

export default function Component1() {
  return (
    // return a full screen with bg #0B0D3C
    <div className="bg-[#0B0D3C]">
      <div className="flex h-screen flex-col items-center justify-center">
        <NextImage src="/logo.png" width={200} height={200} />
        <h1 className="text-4xl font-bold text-white">Lab Elka</h1>
        <Link href="/login">
          <button className="mt-10 rounded-lg bg-[#F5A623] px-10 py-3 text-xl font-bold text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
