import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Image as Placeholder, ShoppingCart } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Categoría 1" },
    { name: "Categoría 2" },
    { name: "Categoría 3" },
    { name: "Categoría 4" },
    { name: "Categoría 5" },
  ];

  const best_sellers = [
    { name: "Producto 1" },
    { name: "Producto 2" },
    { name: "Producto 3" },
    { name: "Producto 4" },
    { name: "Producto 5" },
  ];

  const discounts = [
    { name: "Producto A" },
    { name: "Producto B" },
    { name: "Producto C" },
    { name: "Producto D" },
    { name: "Producto E" },
  ];

  const promotional_section = [
    { name: "Sigue tu pedido", icon: Placeholder },
    { name: "Atención al cliente", icon: Placeholder },
    { name: "Políticas de devolución", icon: Placeholder },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="grid place-content-center min-h-96 w-full bg-accent">
        <Placeholder className="text-neutral-500 size-10" />
      </div>
      <article className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-xl font-medium mb-4">
          Explora nuestras categorías
        </h1>
        <article className="grid grid-cols-5 gap-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center text-center"
            >
              <div className="grid place-content-center w-48 h-48 mb-2 bg-accent rounded-full overflow-hidden">
                <Placeholder className="text-neutral-500 size-10" />
              </div>
              <p>{category.name}</p>
            </div>
          ))}
        </article>
      </article>
      <hr className="my-1" />
      <section className="flex flex-col px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Más vendidos</h2>
          <Button variant="link">
            Ver todos <ChevronRight />
          </Button>
        </div>
        <article className="grid grid-cols-5 gap-6">
          {best_sellers.map((product) => (
            <Card key={product.name} className="gap-2">
              <CardHeader>
                <div className="grid place-content-center w-full h-48 bg-accent rounded-md overflow-hidden mb-4">
                  <Placeholder className="text-neutral-500 size-10" />
                </div>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold mb-2 text-start">
                  $1,000.00
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart /> Agregar al carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </article>
      </section>
      <section className="flex flex-col px-4 py-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Descuentos</h2>
          <Button variant="link">
            Ver todos <ChevronRight />
          </Button>
        </div>
        <article className="grid grid-cols-5 gap-6">
          {discounts.map((product) => (
            <Card key={product.name} className="gap-2">
              <CardHeader>
                <div className="grid place-content-center w-full h-48 bg-accent rounded-md overflow-hidden mb-4">
                  <Placeholder className="text-neutral-500 size-10" />
                </div>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-semibold mb-2 text-neutral-500 line-through">
                  $1000.00
                </span>
                <p className="text-2xl font-semibold mb-2 text-primary">
                  $800.00
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart /> Agregar al carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </article>
      </section>
      <section className="grid grid-cols-3 gap-10 px-4 py-12 bg-accent">
        {promotional_section.map((item) => (
          <div key={item.name} className="flex flex-row justify-center gap-4">
            <div className="grid place-content-center size-12 rounded-full bg-secondary">
              <item.icon className="text-primary size-6" />
            </div>
            <div className="space-y-2">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-neutral-600 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        ))}
      </section>
      <div className="flex flex-col gap-4 items-center justify-center bg-background px-4 py-12">
        <h2 className="text-2xl font-semibold">
          Suscríbete a nuestro boletín
        </h2>
        <p className="text-neutral-600">
          Recibe las últimas noticias y ofertas directamente en tu correo
          electrónico.
        </p>
        <div className="flex justify-center w-full">
          <Input
            placeholder="Ingresa tu correo electrónico"
            className="rounded-r-none w-full max-w-xs"
          />
          <Button className="rounded-l-none">Suscribirse</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
