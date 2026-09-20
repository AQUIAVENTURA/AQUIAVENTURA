# Aquitania Portal

Sí. El problema que señaló tu profesor se puede solucionar cambiando el concepto de la página: AQUIVENTURA no debería sentirse como una sola página larga con información, sino como un pequeño portal turístico interactivo.

La idea sería que Portada, Historia, Experiencias, Naturaleza, Gastronomía, Galería, Opiniones, Mapa y Contacto sean páginas internas diferentes, pero que el usuario siga dentro de AQUIVENTURA. Al hacer clic, por ejemplo, en “Gastronomía”, debe cambiar el contenido de la vista sin abrir otra pestaña y sin sacar al usuario del sitio.

Aquí tienes el prompt modificado para usarlo directamente en una IA que genere/modifique la página:

Quiero que modifiques y mejores el sitio web AQUIVENTURA que ya está desarrollado. No quiero que parezca un blog ni una página informativa estática. Mi profesor indicó que actualmente se siente demasiado sencilla y aburrida, por lo que necesito convertirla en un portal turístico interactivo, moderno y dinámico, manteniendo toda la información y contenido que ya tiene el proyecto.

OBJETIVO PRINCIPAL

Transformar AQUIVENTURA en una experiencia turística interactiva donde el usuario pueda explorar diferentes apartados del municipio de Aquitania.

La página debe dejar de funcionar como una única página larga donde todo aparece mediante scroll.

Quiero que las secciones principales funcionen como páginas internas independientes, pero sin abrir nuevas pestañas y sin sacar al usuario del sitio.

Por ejemplo:

Inicio → Gastronomía → volver a Inicio

Inicio → Historia → volver a Inicio

Inicio → Experiencias → volver a Inicio

El usuario debe sentir que está navegando por diferentes páginas de un mismo sitio turístico.

1. SISTEMA DE NAVEGACIÓN

Crear un sistema de navegación interno mucho más interactivo.

El menú principal debe contener:

Inicio

Historia

Experiencias

Naturaleza

Gastronomía

Galería

Opiniones

Mapa Interactivo

Contacto

Al hacer clic en cualquiera de estas opciones:

No abrir una nueva pestaña.

No abandonar el sitio.

No llevar al usuario a una página externa.

Cambiar la vista o contenido principal del sitio.

Mantener el mismo encabezado y menú.

Permitir regresar fácilmente a Inicio.

Utilizar navegación interna mediante páginas HTML conectadas entre sí o mediante un sistema SPA con JavaScript, dependiendo de la estructura actual del proyecto.

Si se utilizan diferentes archivos HTML, por ejemplo:

index.html
historia.html
experiencias.html
naturaleza.html
gastronomia.html
galeria.html
opiniones.html
mapa.html
contacto.html

todos deben mantener el mismo header, menú, identidad visual y footer.

No utilizar target="_blank" para estas páginas internas.

2. PORTADA / INICIO

La portada debe ser mucho más visual y llamativa.

Mantener el nombre:

AQUIVENTURA

Utilizar una imagen de fondo relacionada con Aquitania y el Lago de Tota.

Agregar una frase turística llamativa, por ejemplo:

"Descubre Aquitania, vive el Lago de Tota."

Agregar botones interactivos:

Explorar Aquitania
Descubrir experiencias

Estos botones deben dirigir a las páginas internas correspondientes.

Agregar elementos visuales que indiquen al usuario que puede explorar el sitio.

Por ejemplo:

tarjetas de acceso rápido;

botones con iconos;

animaciones;

efectos hover;

indicadores de navegación.

3. MENÚ INTERACTIVO

El menú debe permanecer visualmente consistente en todas las páginas.

Agregar efectos cuando el usuario pase el mouse sobre las opciones.

La opción correspondiente a la página actual debe quedar resaltada.

Ejemplo:

Si el usuario está en Gastronomía:

GASTRONOMÍA

debe aparecer visualmente seleccionada.

Agregar también un botón o enlace:

← Volver al inicio

cuando sea necesario.

En dispositivos móviles, convertir el menú en un menú desplegable tipo hamburguesa.

4. HISTORIA

Historia debe ser una página interna independiente.

No mostrar toda la información directamente en la portada.

Crear una experiencia visual basada en una línea de tiempo interactiva.

Mostrar diferentes momentos:

Guaquira y época prehispánica.

Cultura muisca.

Llegada de los españoles.

Puebloviejo.

Ramón Ignacio Avella.

Cambio de nombre a Aquitania.

Aquitania en la actualidad.

Cada momento de la línea de tiempo debe poder seleccionarse para mostrar información adicional.

Agregar fotografías o elementos visuales relacionados con cada periodo.

5. EXPERIENCIAS

Crear una página independiente para las experiencias turísticas.

No hacerla simplemente como una lista de tarjetas.

Agregar filtros interactivos como:

Naturaleza

Aventura

Cultura

Turismo ecológico

Familia

Cada experiencia debe tener:

Imagen.

Nombre.

Descripción corta.

Categoría.

Botón "Descubrir".

Al seleccionar "Descubrir", mostrar información ampliada mediante una ventana modal, panel desplegable o vista interna, sin abrir otra pestaña.

6. NATURALEZA

Crear una página independiente enfocada exclusivamente en los atractivos naturales.

Mostrar:

Lago de Tota.

Páramos.

Paisajes.

Flora.

Fauna.

Ecosistemas.

Crear un diseño visual más inmersivo.

Utilizar imágenes grandes, tarjetas, animaciones y elementos interactivos.

Agregar botones como:

Explorar paisajes

Conocer la fauna

Descubrir ecosistemas

Cada botón debe mostrar contenido adicional sin abandonar AQUIVENTURA.

7. GASTRONOMÍA

Mantener la nueva sección de Gastronomía que ya fue desarrollada, pero convertirla en una página interna independiente.

No debe parecer otra sección más dentro del inicio.

Crear una portada exclusiva:

SABORES DE AQUITANIA

Subtítulo:

"Descubre los sabores, ingredientes y experiencias gastronómicas que hacen parte de la identidad de Aquitania."

Mostrar restaurantes y experiencias gastronómicas mediante un diseño más interactivo.

Incluir establecimientos como:

Taller De Bocado en Bocado.

Rafaelo – Cocina de Autor.

Restaurante Lucho.

Barbacoa Boyacense.

Cada restaurante debe tener:

Imagen.

Nombre.

Tipo de gastronomía.

Descripción.

Ubicación.

Precio aproximado.

Teléfono.

Botón "Ver experiencia".

Al presionar "Ver experiencia", abrir una ventana modal o panel con información completa.

Agregar filtros:

Todos | Tradicional | Cocina de autor | Parrilla | Experiencia cultural

8. GALERÍA

La Galería debe ser una página independiente y mucho más interactiva.

No mostrar solamente seis imágenes estáticas.

Crear una galería tipo mosaico.

Al hacer clic sobre una imagen:

abrirla en pantalla ampliada;

mostrar su título;

mostrar una pequeña descripción;

permitir pasar a la siguiente imagen.

Agregar categorías:

Paisajes.

Lago de Tota.

Cultura.

Gastronomía.

Artesanías.

Naturaleza.

Agregar efectos hover sobre las imágenes.

9. OPINIONES Y CALIFICACIONES

Crear una página interna dedicada a las opiniones.

Mostrar:

⭐ Calificación general

y diferentes comentarios de visitantes.

Agregar un formulario:

Nombre

Calificación ⭐⭐⭐⭐⭐

Comentario

Botón:

Publicar opinión

Al enviar una opinión, esta debe aparecer inmediatamente en la página mediante JavaScript.

Preparar esta sección para que posteriormente pueda conectarse con una base de datos.

Agregar tarjetas dinámicas para las opiniones.

10. MAPA INTERACTIVO

Crear una página independiente para el mapa.

El mapa debe ocupar una parte importante de la pantalla.

Mostrar marcadores para diferentes lugares turísticos.

Al seleccionar un marcador:

mostrar nombre del lugar;

imagen;

descripción;

ubicación;

botón "Conocer más".

El mapa debe permitir al usuario explorar Aquitania de forma visual.

11. CONTACTO

Crear una página independiente de contacto.

No limitarla a un formulario.

Mostrar:

Formulario de contacto.

Información de AQUIVENTURA.

Redes sociales.

Ubicación.

Teléfono/correo si están disponibles.

Agregar un mensaje visual de bienvenida.

El formulario debe mostrar una confirmación cuando el usuario lo envíe.

Preparar esta sección para una futura conexión con una base de datos.

12. ELEMENTOS PARA HACER LA PÁGINA MÁS INTERACTIVA

Agregar elementos que eviten la apariencia de blog:

Animaciones suaves.

Efectos hover.

Tarjetas interactivas.

Modales.

Botones dinámicos.

Galería ampliable.

Filtros.

Menús desplegables.

Línea de tiempo interactiva.

Mapa interactivo.

Sistema de opiniones.

Indicadores de navegación.

Botón "Volver arriba".

Transiciones suaves entre páginas internas.

No abusar de las animaciones. Deben sentirse profesionales y relacionadas con turismo.

13. IDENTIDAD VISUAL

Mantener la identidad de AQUIVENTURA.

Utilizar:

Bebas Neue para títulos.

Una tipografía limpia y moderna para textos.

Colores inspirados en el Lago de Tota, naturaleza y paisajes de Boyacá.

Fotografías grandes y de buena calidad.

Espacios amplios.

Diseño moderno.

Tarjetas con bordes suaves.

Sombras sutiles.

La etiqueta <em> no debe mostrar el texto en cursiva. Si se utiliza para destacar palabras, debe funcionar como resaltado mediante CSS.

14. EXPERIENCIA DEL USUARIO

La navegación debe sentirse como la de un verdadero sitio turístico.

Ejemplo de recorrido:

INICIO

↓

HISTORIA

↓

EXPERIENCIAS

↓

NATURALEZA

↓

GASTRONOMÍA

↓

GALERÍA

↓

OPINIONES

↓

MAPA

↓

CONTACTO

El usuario debe poder regresar en cualquier momento al Inicio.

No debe sentirse como si estuviera leyendo un documento largo.

Debe sentirse como si estuviera explorando Aquitania digitalmente.

15. RESPONSIVE

La página debe funcionar correctamente en:

Computadores.

Portátiles.

Tablets.

Celulares.

El menú debe adaptarse a pantallas pequeñas.

Las imágenes no deben deformarse.

Las tarjetas deben reorganizarse automáticamente.

Los botones deben ser fáciles de tocar desde el celular.

16. IMPORTANTE

NO eliminar la información actual de AQUIVENTURA.

NO convertir la página en un blog.

NO colocar todo el contenido en una única página.

NO abrir páginas internas en nuevas pestañas.

NO utilizar enlaces externos para las secciones internas.

La prioridad es mejorar la interacción y la navegación manteniendo el contenido existente.

El resultado final debe parecer un portal turístico profesional de Aquitania, donde cada apartado tiene su propio espacio y el usuario puede explorar libremente el sitio sin abandonarlo.

Antes de modificar el código, revisar la estructura actual del proyecto y reutilizar los estilos, imágenes, contenido y componentes que ya funcionan correctamente. No duplicar código innecesariamente y mantener una estructura organizada. NO CREES IMAGENES CON IA TODA IMAGEN DEBE SALIR DE LOS ARCHIVOS ENVIADOS

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b6ef06ce-e108-443d-b92c-7204c91d538b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
