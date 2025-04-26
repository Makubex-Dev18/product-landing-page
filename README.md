# product-landing-page
Modulo 1 -lab01
1) Explica la estructura semántica que elegiste y justifica tus etiquetas.

mi proyecto es un portafolio personal y profesional explicare rapidamente su estructura 💯
se utiliza estructura semantica en resumen:
```html
<!DOCTYPE html>
<html lang="es">
  <head>...</head>
  <body>
    <header>...</header>
    <main>...</main>
    <section>..</section>
    <articule>..</articule>
    <footer>...</footer>
  </body>
</html>
```
header: Encabezado del sitio que contiene elementos introductorios o de navegación.
nav: Define el bloque de navegación principal. Aunque es válido tener navegación fuera del <header>, aquí tiene sentido porque está al inicio y contiene el logo y enlaces.
main: Representa el contenido principal del documento. Solo debe haber uno por página y no debe incluir navegación, encabezado o pie de página.
section: Cada bloque temático está adecuadamente separado por secciones con su propio id, lo cual mejora la accesibilidad, indexación y navegación.
footer: Contenedor adecuado para la parte de enlacesa a redes y la etiqueta <address> final del documento.




![image](https://github.com/user-attachments/assets/743e2e88-c538-4b4b-a842-82c340fa1d33)



2)logros adicionales:
se realizo los 2 logros adicionales
Logro 1: Implementar un Modo Oscuro (Dark Mode)
(se implemento un boton en el nav y tmb una funcionalidad dark-mode en javascript que hace que al precionar el icono de noche , trae los estilos 
configurados en el css con el backgrond en negro y color blanco para el body 

Logro 2: Microinteracciones y Transiciones
se hizo un hover para los item del nav, que al pasar poner los colores en azul


2)Incluye el prompt usado con la IA y describe cómo validaste la respuesta.

Prompt Engineering
Generar al menos un prompt para la IA solicitando sugerencias sobre la estructura semántica.
![image](https://github.com/user-attachments/assets/73dc89b6-48c3-49b6-81fc-752b7915c361)


respuestas:

![image](https://github.com/user-attachments/assets/8bb65e18-d68a-48a2-8bbb-8fc606055fae)

![image](https://github.com/user-attachments/assets/6ef89a6a-bec5-44a3-a3a2-1c1f10621ad7)


Explicar los ajustes manuales que le hiciste a la propuesta de la IA para garantizar accesibilidad.

*me ayudo en el parte de proyectos cambiar un div en general, por poner un article a cada proyecto  para mejorar la estructura y legibilidad:
*en el footer poner la informacion del email y telefono entre otros dentro de un address y ya no un div
