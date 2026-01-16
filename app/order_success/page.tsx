import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <section className="flex items-center justify-center py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* ICON */}
            <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/20">
              <CheckCircle className="size-16 text-primary" />
            </div>

            {/* TITLE */}
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              ¡Pedido realizado!
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-8 text-lg text-muted-foreground">
              Gracias por tu compra. Te hemos enviado un email de confirmación
              con los detalles de tu pedido y el número de seguimiento.
            </p>

            {/* ORDER INFO */}
            <div className="mb-8 rounded-3xl bg-muted/30 p-8">
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Número de Pedido
                  </span>
                  <span className="font-medium">
                    #KADASH-{Date.now().toString().slice(-6)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Fecha Estimada de Entrega
                  </span>
                  <span className="font-medium">5–7 días hábiles</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Método de Envío</span>
                  <span className="font-medium">Envío Estándar Gratis</span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">
                <Link href="/">Volver al inicio</Link>
              </Button>

              <Button size="lg" variant="secondary" className="text-primary">
                <Link href="/products">Ver más productos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
