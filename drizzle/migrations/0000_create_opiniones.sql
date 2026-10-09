CREATE TABLE public.opiniones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  comentario text NOT NULL,
  estrellas integer NOT NULL DEFAULT 5,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.opiniones TO anon;
GRANT SELECT, INSERT ON public.opiniones TO authenticated;
GRANT ALL ON public.opiniones TO service_role;

ALTER TABLE public.opiniones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede leer opiniones"
ON public.opiniones FOR SELECT TO anon, authenticated
USING (true);

CREATE POLICY "Cualquiera puede publicar una opinión"
ON public.opiniones FOR INSERT TO anon, authenticated
WITH CHECK (char_length(nombre) BETWEEN 1 AND 100 AND char_length(comentario) BETWEEN 1 AND 1000 AND estrellas BETWEEN 1 AND 5);