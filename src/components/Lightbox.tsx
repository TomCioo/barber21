import { X } from "lucide-react";
import { useEffect } from "react";

export default function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-slow"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground/80 hover:text-gold"
        aria-label="Zamknij"
      >
        <X className="w-8 h-8" />
      </button>
      <img src={src} alt="Powiększenie" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-elegant" />
    </div>
  );
}
