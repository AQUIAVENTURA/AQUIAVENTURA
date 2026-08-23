import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="gradient-lake fixed bottom-6 right-6 z-50 inline-flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-110"
      aria-label="Volver arriba"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
