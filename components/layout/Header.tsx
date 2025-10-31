import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            height={48}
            width={48}
            priority={true}
          />
          <span className="text-xl font-bold hidden sm:block">ProStore</span>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
