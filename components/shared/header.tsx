import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShoppingCart, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex flex-col sticky top-0 bg-background">
      <div className="bg-primary w-full py-1 text-center text-white">
        <h3 className="font-medium text-xs">
          Envío gratis por compras mayores a $50.000
        </h3>
      </div>
      <div className="grid grid-cols-3 py-2 px-4">
        <div className="flex items-center">
          <Input
            placeholder="Buscar producto..."
            className="max-w-xs shadow-none border-0 border-b rounded-none focus:border focus:rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
        <div className="flex items-center justify-end">
          <Button variant={"link"} className="mr-2">
            <ShoppingCart />
            <span className="text-foreground">$0.00</span>
          </Button>
          <Button variant={"link"}>
            <User />
            <span className="text-foreground">Mi cuenta</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
