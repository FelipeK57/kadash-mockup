import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Image as Placeholder, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const categories = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    "Categoría 5",
  ];
  const bestSellers = [
    { id: 1, name: "Producto 1", price: 1000 },
    { id: 2, name: "Producto 2", price: 1000 },
    { id: 3, name: "Producto 3", price: 1000 },
    { id: 4, name: "Producto 4", price: 1000 },
    { id: 5, name: "Producto 5", price: 1000 },
  ];
  const discounts = [
    { id: 1, name: "Producto 1", price: 1000 },
    { id: 2, name: "Producto 2", price: 1000 },
    { id: 3, name: "Producto 3", price: 1000 },
    { id: 4, name: "Producto 4", price: 1000 },
    { id: 5, name: "Producto 5", price: 1000 },
  ];

  const promotional_section = [
    { name: "Sigue tu pedido", icon: Placeholder },
    { name: "Atención al cliente", icon: Placeholder },
    { name: "Políticas de devolución", icon: Placeholder },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* HERO */}
      <section className="bg-accent py-14">
        <div className="mx-auto max-w-350 px-4 min-h-96 grid place-content-center">
          <Placeholder className="size-10 text-neutral-500" />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-14">
        <div className="mx-auto max-w-350 px-4 text-center">
          <h2 className="mb-8 text-xl font-medium">
            Explora nuestras categorías
          </h2>

          <div className="grid grid-cols-5 gap-12">
            {categories.map((category) => (
              <div key={category} className="flex flex-col items-center">
                <div className="mb-3 grid h-48 w-48 place-content-center rounded-full bg-accent">
                  <Placeholder className="size-10 text-neutral-500" />
                </div>
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS */}
      <section className="py-10 bg-accent">
        <div className="mx-auto max-w-350 px-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Más vendidos</h2>
            <Button variant="link">
              <Link href="/products">Ver todos</Link> <ChevronRight />
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {bestSellers.map((product) => (
              <Card key={product.id} className="flex flex-col gap-2">
                <CardHeader>
                  <div className="grid h-48 place-content-center rounded-md bg-accent">
                    <Placeholder className="size-10 text-neutral-500" />
                  </div>
                  <CardTitle className="mt-1">
                    <Link href={"/product_detail"}>{product.name}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>$ {product.price.toFixed(2)}</p>
                </CardContent>

                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart />
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DESCUENTOS */}
      <section className="py-10 bg-accent">
        <div className="mx-auto max-w-350 px-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Descuentos</h2>
            <Button variant="link">
              <Link href="/products">Ver todos</Link> <ChevronRight />
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {discounts.map((product) => (
              <Card key={product.id} className="flex flex-col gap-2">
                <CardHeader>
                  <div className="relative grid h-48 place-content-center rounded-md bg-accent">
                    <Placeholder className="size-10 text-neutral-500" />
                    <Badge
                      variant={"secondary"}
                      className="absolute top-2 right-2 text-xs text-primary"
                    >
                      10% OFF
                    </Badge>
                  </div>
                  <CardTitle className="mt-1">
                    <Link href={"/product_detail"}>{product.name}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>$ {product.price.toFixed(2)}</p>
                </CardContent>

                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart />
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PROMOCIONAL */}
      <section className="py-14">
        <div className="mx-auto max-w-350 px-4">
          <div className="grid grid-cols-3 gap-10">
            {promotional_section.map((item) => (
              <div
                key={item.name}
                className="flex flex-row justify-center gap-4"
              >
                <div className="grid place-content-center size-12 rounded-full bg-secondary">
                  <item.icon className="size-6 text-primary" />
                </div>

                <div className="space-y-2">
                  <p className="font-medium">{item.name}</p>
                  <p className="max-w-xs text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-14 border-t border-border">
        <div className="mx-auto max-w-xl px-4 text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Suscríbete a nuestro boletín
          </h2>
          <p className="text-neutral-600">
            Recibe las últimas noticias y ofertas directamente en tu correo.
          </p>

          <div className="flex justify-center">
            <Input
              placeholder="Correo electrónico"
              className="max-w-xs rounded-r-none"
            />
            <Button className="rounded-l-none">Suscribirse</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
