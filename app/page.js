import SolMirPreview from "./sol-mir-preview/page";

export const metadata = {
  title: "Sol Mir | Creadora del Sistema EJE®",
  description: "Conocé a Sol Mir y el Sistema EJE®, una forma de observar cómo respondés en Vínculos, Trabajo, Dinero e Identidad.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <SolMirPreview />;
}
