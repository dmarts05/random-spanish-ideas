import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-4">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-lg">Página no encontrada.</p>
      <Button asChild>
        <Link to="/">Inicio</Link>
      </Button>
    </main>
  );
}
