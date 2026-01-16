"use client";

import { PackageCheck, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function OrderTrack() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <section className="flex items-center justify-center py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* ICON */}
            <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/20">
              <PackageCheck className="size-14 text-primary" />
            </div>

            {/* TITLE */}
            <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
              Seguir mi pedido
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-8 text-lg text-muted-foreground">
              Ingresa tu número de pedido para conocer el estado actual y el
              progreso del envío.
            </p>

            {/* FORM */}
            <div className="mb-8 rounded-3xl p-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input placeholder="Ej: KADASH-123456" className="h-12" />
                <Button size="lg" className="h-12">
                  Buscar pedido
                </Button>
              </div>
            </div>

            {/* ORDER STATUS */}
            <div className="rounded-3xl border bg-background p-8 text-left">
              <h2 className="mb-6 text-lg font-medium text-center">
                Estado del pedido
              </h2>

              <div className="space-y-6">
                {/* STEP */}
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                    <PackageCheck className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Pedido confirmado</p>
                    <p className="text-sm text-muted-foreground">
                      Hemos recibido tu pedido y está siendo procesado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full">
                    <Truck className="size-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">En camino</p>
                    <p className="text-sm text-muted-foreground">
                      Tu pedido ha sido enviado y está en tránsito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full">
                    <MapPin className="size-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Entregado</p>
                    <p className="text-sm text-muted-foreground">
                      El pedido fue entregado correctamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HELP */}
            <p className="mt-6 text-sm text-muted-foreground">
              ¿Tienes problemas para encontrar tu pedido?{" "}
              <a href="/support" className="underline hover:no-underline">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
