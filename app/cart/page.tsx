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
import { Trash2, Image as Placeholder, Plus, Minus } from "lucide-react";

export default function Cart() {
  // Datos de ejemplo
  const shoppingCart = [
    {
      id: 1,
      name: "Camiseta básica",
      brand: "Marca A",
      category: "Ropa",
      price: 19900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Zapatos deportivos",
      brand: "Marca B",
      category: "Calzado",
      price: 45900,
      quantity: 2,
    },
    {
      id: 3,
      name: "Mochila urbana",
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
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700 w-fit ml-auto lg:ml-0"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Vaciar carrito
              </Button>
            </div>

            <div className="space-y-4">
              {shoppingCart.map((item) => (
                <Card key={item.id} className="flex flex-row gap-4 p-4">
                  {/* Imagen del producto */}
                  <div className="grid h-24 aspect-square place-content-center rounded-md bg-accent">
                    <Placeholder className="size-10 text-neutral-500" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <Badge variant="outline">{item.category}</Badge>
                      <CardTitle className="text-base lg:text-lg">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-sm lg:text-base">
                        {item.brand} • {item.category}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Controles de cantidad y eliminar */}
                  <div className="flex flex-col items-end justify-between gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 w-fit"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-4 justify-end">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Resumen del carrito - Lado derecho */}
          <section className="lg:w-1/3 w-full h-fit lg:sticky lg:top-20 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Order Summary
                </CardTitle>
                <CardDescription>
                  Verifique los detalles antes de proceder al pago
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Original Price */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Original price</p>
                  <p className="font-medium">$7,592.00</p>
                </div>

                {/* Savings */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Savings</p>
                  <p className="font-medium text-red-600">-$299.00</p>
                </div>

                {/* Store Pickup */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Store Pickup</p>
                  <p className="font-medium">$99.00</p>
                </div>

                {/* Tax */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-neutral-600">Tax</p>
                  <p className="font-medium">$799.00</p>
                </div>

                <hr className="border-neutral-300 my-2" />

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <p>Total</p>
                  <p>$8,191.00</p>
                </div>

                {/* Botones */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full">
                    Continue Shopping
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
