import {
  EllipsisVertical,
  MenuIcon,
  ShoppingCart,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Menu() {
  return (
    <>
      <nav className="hidden gap-1 sm:flex">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon />
            <span>Cart</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon />
            <span>Sign in</span>
          </Link>
        </Button>
        <ModeToggle />
      </nav>
      <nav className="sm:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical size={24} />
          </SheetTrigger>

          <SheetContent className="flex flex-col items-start p-6 space-y-4">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />

            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart className="mr-2" /> Cart
              </Link>
            </Button>

            <Button variant="outline">Sign In</Button>

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
