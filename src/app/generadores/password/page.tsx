import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorPassword from "./GeneradorPassword";

const SLUG = "password";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Una contraseña fuerte ayuda a reducir riesgos en cuentas personales y de trabajo.
      Este generador te permite crear claves aleatorias con distintos tipos de caracteres
      sin tener que inventarlas manualmente.
    </p>
    <h2>Cómo generar una contraseña segura</h2>
    <ol>
      <li>Ajusta la longitud deseada.</li>
      <li>Elige si quieres incluir mayúsculas, minúsculas, números y símbolos.</li>
      <li>Genera la contraseña y cópiala si te sirve.</li>
    </ol>
  </>
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd(SLUG)) }}
      />
      <ToolLayout slug={SLUG} tool={<GeneradorPassword />} content={content} />
    </>
  );
}
