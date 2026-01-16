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

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <section className="grow flex items-center justify-center py-20">
        <Card className="w-full max-w-md border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Iniciar sesión</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input placeholder="Correo electrónico" type="email" />
            <Input placeholder="Contraseña" type="password" />
            <Button className="w-full">Ingresar</Button>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Link
              href="/register"
              className="w-full text-center text-sm text-primary hover:underline"
            >
              ¿No tienes cuenta? Regístrate
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
