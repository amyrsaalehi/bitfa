import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="btn btn-ghost normal-case bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex flex-col gap-1"
      >
        <Image
          src="/bitfa.png"
          alt="بیتفا"
          width={50}
          height={50}
          className="rounded-lg"
          priority
        />
      </Link>
    </div>
  );
}
