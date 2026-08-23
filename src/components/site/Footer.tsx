import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { navItems } from "@/data/aquiventura";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-wide">
            AQUI<span className="text-primary">VENTURA</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Portal turístico de Aquitania, Boyacá. Historia, naturaleza, sabores y experiencias
            alrededor del <em>Lago de Tota</em>.
          </p>
        </div>

        <div>
          <p className="font-display text-xl tracking-wide">Explorar</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl tracking-wide">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Aquitania, Boyacá, Colombia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +57 320 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" /> hola@aquiventura.co
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Instagram className="size-4" />
            </span>
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Facebook className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AQUIVENTURA · Proyecto turístico de Aquitania, Boyacá
      </div>
    </footer>
  );
}
