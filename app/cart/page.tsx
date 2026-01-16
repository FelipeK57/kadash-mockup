import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Image as Placeholder, Plus, Minus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Cart() {
  // Datos de ejemplo
  const shoppingCart = [
    {
      id: 1,
      name: "Producto 1",
      brand: "Marca A",
      category: "Ropa",
      price: 19900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      brand: "Marca B",
      category: "Calzado",
      price: 45900,
      quantity: 2,
    },
    {
      id: 3,
      name: "Producto 3",
      brand: "Marca C",
      category: "Accesorios",
      price: 29900,
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex flex-col py-14 px-4 max-w-6xl gap-8 w-full mx-auto">
        {/* Título */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-2xl font-bold">Carrito de compras</h2>
          <p className="text-neutral-600">
            Revise los productos que ha seleccionado antes de proceder al pago.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Carrito de productos - Lado izquierdo */}
          <section className="lg:w-2/3 w-full space-y-6">
            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-between lg:items-center">
              <h3 className="text-xl font-semibold">
                Productos en tu carrito ({shoppingCart.length})
              </h3>
              <Button
                variant="secondary"
                size="sm"
                className="text-primary w-fit ml-auto lg:ml-0"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Vaciar carrito
              </Button>
            </div>

            <div className="space-y-4">
              {shoppingCart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b py-4"
                >
                  {/* Imagen + nombre */}
                  <div className="flex flex-1 items-center gap-4">
                    <div className="grid size-20 place-content-center rounded-md bg-accent">
                      <Placeholder className="size-8 text-neutral-500" />
                    </div>

                    <p className="font-medium">{item.name}</p>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Minus className="size-4" />
                    </Button>
                    <Input
                      className="w-16 text-center"
                      min={1}
                      defaultValue={1}
                    />
                    <Button variant="outline" size="icon">
                      <Plus className="size-4" />
                    </Button>
                  </div>

                  {/* Precio */}
                  <p className="w-24 text-right font-semibold">$1,499</p>

                  {/* Remove */}
                  <Button variant="ghost" size="icon" className="text-primary">
                    <Trash2 />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Resumen del carrito - Lado derecho */}
          <section className="lg:w-1/3 w-full h-fit lg:sticky lg:top-30 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Resumen del carritos
                </CardTitle>
                <CardDescription>
                  Verifique los detalles antes de proceder al pago
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Original Price */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Precio original</p>
                  <p className="font-medium">$8,690.00</p>
                </div>

                {/* Savings */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Ahorros</p>
                  <p className="font-medium text-green-600">-$500.00</p>
                </div>

                {/* Store Pickup */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Recogida en tienda</p>
                  <p className="font-medium">Gratis</p>
                </div>

                {/* Tax */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Impuesto</p>
                  <p className="font-medium">$1,000.00</p>
                </div>

                <hr className="border-neutral-300 my-2" />

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <p>Total</p>
                  <p>$9,190.00</p>
                </div>

                {/* Botones */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/order_success" className="w-full">
                      Proceder al pago
                    </Link>
                  </Button>
                  <Button variant="secondary" className="text-primary w-full">
                    Seguir comprando
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
