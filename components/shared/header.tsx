import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-primary py-1 text-center text-background text-xs font-medium">
        Envío gratis por compras mayores a $50.000
      </div>

      <div className="mx-auto max-w-350 px-4">
        <div className="grid grid-cols-3 items-center py-3">
          <Input
            placeholder="Buscar producto..."
            className="max-w-xs border-0 border-b rounded-none shadow-none"
          />

          <div className="flex justify-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="link">
              <ShoppingCart />
              <Link href="/cart" className="text-foreground">$0.00</Link>
            </Button>
            <Button variant="link">
              <User />
              <Link href="/login" className="text-foreground">Mi cuenta</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
