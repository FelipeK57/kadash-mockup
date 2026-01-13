import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="px-4 mx-auto max-w-8xl">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.svg"
                alt="Kala Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Kadash es una tienda dedicada a ofrecer productos seleccionados,
              diseño moderno y una experiencia de compra simple y segura.
            </p>
          </div>

          {/* Tienda */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Tienda
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shop" className="footer-link">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/categories" className="footer-link">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/offers" className="footer-link">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="footer-link">
                  Novedades
                </Link>
              </li>
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Atención al cliente
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="footer-link">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="footer-link">
                  Envíos y devoluciones
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="footer-link">
                  Seguimiento de pedidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Kala
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="footer-link">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="footer-link">
                  Sustentabilidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-foreground">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="footer-link">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />
      </div>
      <span className="block text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kala. Todos los derechos reservados.{" "}
        Desarrollado por{" "}
        <Link
          href="https://sitcols.kevinbolanos.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          SITCOLS.
        </Link>
      </span>
    </footer>
  );
};
