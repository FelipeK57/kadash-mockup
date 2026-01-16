import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image as Placeholder, Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-350 px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* IMAGEN */}
            <div className="mx-auto w-full">
              <div className="grid w-full aspect-square place-content-center rounded-lg bg-accent">
                <Placeholder className="size-12 text-neutral-500" />
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary">Categoría</Badge>

              <h1 className="text-2xl font-semibold leading-tight">
                Nombre del producto
              </h1>

              {/* PRECIO + RATING */}
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-3xl font-bold">$1,249.99</p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4">
                <Button>
                  <ShoppingCart className="mr-2 size-4" />
                  Agregar al carrito
                </Button>
              </div>

              <hr className="border-border" />

              {/* DESCRIPCIÓN */}
              <div className="space-y-4 text-neutral-600">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sunt cumque itaque officiis veniam inventore nobis aspernatur odit! Delectus tempore incidunt sapiente voluptates aspernatur vel esse sed deleniti aliquid praesentium?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eaque maxime animi, ea in hic, quod voluptatem excepturi nemo laborum numquam obcaecati nesciunt tempore error quis! Nulla earum sint nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
