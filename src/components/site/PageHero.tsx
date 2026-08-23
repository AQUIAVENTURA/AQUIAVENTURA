import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  children?: ReactNode;
  height?: "sm" | "md";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  height = "sm",
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden ${height === "md" ? "min-h-[62vh]" : "min-h-[46vh]"} flex items-end`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="veil absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <ArrowLeft className="size-4" /> Volver al inicio
        </Link>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-4xl font-display text-5xl leading-none text-primary-foreground drop-shadow sm:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">{subtitle}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
