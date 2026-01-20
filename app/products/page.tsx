import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronLeft,
  ChevronRight,
  Image as Placeholder,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function Products() {
  const categories = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
  ];

  const products = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    name: `Producto ${i + 1}`,
    price: 1000,
    discountPrice: i % 3 === 0 ? 800 : null,
  }));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="mx-auto max-w-350 px-4 py-10 flex gap-10">
        {/* FILTROS */}
        <aside className="w-72 shrink-0 space-y-6 sticky top-40 self-start">
          <div>
            <h3 className="mb-4 font-medium">Buscar</h3>
            <Input placeholder="Buscar productos..." />
          </div>

          <div>
            <h3 className="mb-4 font-medium">Categorías</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 text-sm"
                >
                  <Checkbox />
                  {category}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Precio</h3>
            <div className="flex items-center gap-2">
              <Input placeholder="Min" type="number" />
              <Input placeholder="Max" type="number" />
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full">Aplicar filtros</Button>
            <Button variant="secondary" className="text-primary w-full">
              Limpiar filtros
            </Button>
          </div>
        </aside>

        {/* GRID DE PRODUCTOS */}
        <section className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">Todos los productos</h1>
            <span className="text-sm text-neutral-500">
              {products.length} resultados
            </span>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col gap-2">
                <CardHeader>
                  <div className="grid h-48 place-content-center rounded-md bg-accent">
                    <Placeholder className="size-10 text-neutral-500" />
                  </div>
                  <CardTitle className="mt-1 text-base">
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

          {/* Paginación */}
          <section className="flex items-center justify-center space-x-4">
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
            <span>1 de 5</span>
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
