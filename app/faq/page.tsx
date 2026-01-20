import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex flex-col py-14 px-4 max-w-2xl gap-8 w-full mx-auto">
        {/* Título */}
        <h1 className="text-3xl font-bold">¿Como podemos ayudarte?</h1>
        <p>
          Estas son algunas de las preguntas que recibimos con más frecuencia.
          Si no encuentra lo que busca, contáctenos en cualquier momento por
          teléfono, chat o correo electrónico.
        </p>
        <Input placeholder="Buscar en las preguntas frecuentes..." />

        {/* Sección de Preguntas Frecuentes */}
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I customize the components?</AccordionTrigger>
            <AccordionContent>
              Yes! You can customize each component to match your design needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look
              and feel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Can I customize the components?</AccordionTrigger>
            <AccordionContent>
              Yes! You can customize each component to match your design needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <Footer />
    </div>
  );
}
