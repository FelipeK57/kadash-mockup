import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-primary py-1 text-center text-background text-xs font-medium">
        Envío gratis por compras mayores a $50.000
      </div>

      <div className="mx-auto max-w-350 px-4">
        <div className="grid grid-cols-3 items-center py-3">
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="flex md:hidden">
              <Menu />
            </Button>
            <Input
              placeholder="Buscar producto..."
              className="max-w-xs border-0 border-b rounded-none shadow-none focus-visible:ring-0"
            />
          </div>

          <div className="flex justify-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="link">
              <ShoppingCart />
              <Link href="/cart" className="text-foreground">
                $0.00
              </Link>
            </Button>
            <Button variant="link">
              <User />
              <Link href="/login" className="text-foreground">
                Mi cuenta
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-350 px-4 py-1">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <Button variant="ghost" className="text-xs">
              Kits
            </Button>
            <Button variant="ghost" className="text-xs">
              Cuidado corporal
            </Button>
            <Button variant="ghost" className="text-xs">
              Cuidado del cabello
            </Button>
            <Button variant="ghost" className="text-xs">
              Skincare
            </Button>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Complementos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="whitespace-nowrap">
                  Moñas y gorros de satin
                </NavigationMenuLink>
                <NavigationMenuLink>Ganchos</NavigationMenuLink>
                <NavigationMenuLink>Peines</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Button variant="ghost" className="text-xs">
              Blog
            </Button>
            <Button variant="ghost" className="text-xs">
              Diagnostico capilar
            </Button>
            <Button variant="ghost" className="text-xs">
              Punto de venta
            </Button>
            <Button variant="ghost" className="text-xs">
              Testimonios
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
