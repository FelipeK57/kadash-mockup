import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <section className="grow flex items-center justify-center py-20">
        <Card className="w-full max-w-md p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Crear cuenta</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input placeholder="Nombre completo" />
            <Input placeholder="Correo electrónico" type="email" />
            <Input placeholder="Contraseña" type="password" />
            <Input placeholder="Confirmar contraseña" type="password" />
            <Button className="w-full">Registrarse</Button>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Link href="/login" className="w-full text-center text-sm text-primary hover:underline">
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
