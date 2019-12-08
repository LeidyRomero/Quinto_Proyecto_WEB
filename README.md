# Entrega 5 - The car guide

# Video
<a href="https://uniandes-my.sharepoint.com/:v:/g/personal/pa_suarezm_uniandes_edu_co/EYFbGy1Iaa1PpYAHcRYBkY8B5mKOJLGNOBpcxWI9UkClJQ?e=VTKdHw">En esta ubicación</a> se puede encontrar un video mostrando la funcionalidad de la aplicación web propuesta. Es necesario un usuario uniandes para acceder a dicha ubicación.

# Descripción
<h4>Solución:</h4>
Una aplicación para publicar carros en venta, así como conectar a empresas que ofrecen servicios de mantenimiento automovilistico con los clientes de la aplicación.<br>

<h4>Otras propuestas:</h4>

- TuCarro: Aplicación para publicar carros en venta.

- Otras aplicaciones de venta de autos.

<h4>Valor agregado:</h4>
Estas soluciones no ofrecen la comunicación con terceros, de manera que se ofrezcan dos servicios tales como la venta de autos y los servicios de mantenimiento.

<h4>Clientes objetivos:</h4>
Dueños de autos de Colombia, interesados en venta y/o mantenimiento de automoviles.

# Instrucciones
<h4>Instrucciones de descarga y despliegue:</h4>
<ol>
  <li>Clonar el repositorio <a href="https://github.com/isis3710-uniandes/Team04-Entrega4">aqui</a></li>
  <li>Instalar dependencias ejecutando en consola y/o terminal el comando "npm install" en los directorios car-guide-back y car-guide-front ubicados en TheCarGuide y TheCarGuide/car-guide-back respectivamente</li>
  <li>Ejecutar el proyecto ejecutando el comando "npm start" en ambas terminales (una sobre TheCarGuide/car-guide-back y otra sobre TheCarGuide/car-guide-front)</li>
  <li>Abrir en un navegador la dirección localhost:3000</li>
</ol>

<h4>Instrucciones de uso:</h4>
<ol>
  <li>Para usar la aplicación, ingrese en el siguiente link: http://thecarguide.herokuapp.com</li>
  <li>Algunas funcionalidades de la aplicación solo son accesibles cuando el usuario este logueado, para esto se debe registrar y posteriormente loguearse, el proceso de registro solo se debe hacer la primera vez.</li>
</ol> 

# Sobre el proyecto
<h4>Integrantes:</h4>
<ol>
  <li>Ivan Garcia</li>
  <li>Juliana Prieto</li>
  <li>Leidy Romero</li>
  <li>Pablo Suarez</li>
</ol> 

# Comentarios sobre el cumplimiento de los test
A continuacón se presenta el análisis realizado para cumplir con las pautas de usabilidad según la normatividad aplicable a Colombia, esta normatividad se encuentra en la página https://ntc5854.accesibilidadweb.co/index.php/explicacion-tecnica/como-se-hacen-las-cosas/principios-de-la-norma/


<h4>Perceptible</h4>
3.1.4.9. Imágenes de texto: 
  - Ademas del logo, se encuentra el texto de diseño de la página de inicio.
3.1.4.8. Presentación visual
  - La elección de color de fondo y primer plano por parte del usuario se proyecta para la segunda versión de la aplicación.
  - El ancho de todos los textos no es mayor a 80 caracteres.
  - Los textos solo estan justificados a lado izquierdo.
  - El espacio entre lineas de los textos es mayor a 1,5.
  - El texto se ajusta hasta 200% de manera legible.
3.1.4.7. Sonido de fondo bajo o ausente
  - La página no tiene ningun tipo de sonido.
3.1.4.6. Contraste mejorado
  - El contraste de los textos y las imágenes esta en los rangos esperados.
3.1.4.5. Imágenes de texto
  - Se utiliza texto en vez de imágenes de texto en el caso de la página de inicio.
3.1.4.4. Cambio de tamaño de texto
  - Todos los textos se ajustan de tamaño hasta un 200%.
3.1.4.3. Contraste minimo
  - A partir de las herramientas para diseñadores que ofrece el navegador chrome, se determino que todos los contrastes de las páginas son superiores a 4,5.
3.1.4.2. Control de audío
  - La página no tiene ningun audio.
3.1.4.1. Uso de color
  - El color no es el único medio de transmisión de información, todos los elementos HTML de la página tienen algun texto auxiliar.
3.1.3.3. Características sensoriales
  - La funcionalidad del contenido no depende completamente de características sensoriales.
<br>
<h4>Operable</h4>
3.2.1.1 Teclado
  - Todos los elementos interactuables son alcanzables únicamente con el teclado
3.2.1.2 Sin trampas para el foco del teclado
  - El foco sobre cualquier componente alcanzable por teclado se puede quitar usando, también, únicamente el teclado
3.2.1.3 Teclado (sin excepciones)
  - No es requerida ninguna velocidad particular de tecleo para operar la página usando exclusivamente el teclado
3.2.2.1 Tiempo ajustable
  - No existen límites de tiempo en general
3.2.2.2 Poner en pausa, detener, ocultar
  - No existen elementos que deban ser sujetos a estas operaciones
3.2.2.3 Sin tiempo
  - No existen interacciones que dependan del tiempo de interacción
3.2.2.4 Interrupciones
  - No existen interrupciones sobre las posibles interacciones con la página
3.2.2.5 Re-autenticación
  - Todas las actividades realizables en la página se pueden continuar sin pérdida de datos de necesitarse una re-autenticación
3.2.3.1 Umbral de tres destellos o menos
  - No existen destellos en general en la página: ni destellos rojos ni más de tres destellos en menos de un segundo
3.2.3.2 Tres destellos
  - No existen elementos que destellen más de tres veces por segundo; en general, nada en la página destella
3.2.4.1 Evitar bloques
  - No existen bloques periféricos al contenido principal de cada página
3.2.4.10 Encabezados de sección
  - Todas las secciones presentan un encabezado diciente respecto al contenido
3.2.4.2 Titulado de páginas
  - La página tiene títulos que describen el tema de la misma
3.2.4.3 Orden del foco
  - Los componentes interactuables por teclado son enfocados en un orden intuitivo y diciente de su jerarquía y propósito
3.2.4.4 Propósito de los enlaces (en contexto)
  - Todos los enlaces tienen sentido y significado por sí sólos
3.2.4.5 Vías múltiples
 - Existen múltiples formas de alcanzar cualquier página dentro del sitio
3.2.4.6 Encabezados y etiquetas
  - Los encabezados y etiquetas son inteligibles, aún fuera de contexto
3.2.4.7 Foco visible
  - El foco del teclado siempre es visible desde el momento en que se empieza a usar
3.2.4.8 Ubicación
  -  Siempre es visible en qué página del sitio se está navegando con respecto a las demás páginas
<br>
<h4>Comprensible</h4>
3.3.3.5. Ayuda
El formulario para agregar un nuevo auto los campos tienen ejemplos como ayuda para el usuario.
3.3.3.4. Prevención de errores
No aplica.
3.3.3.3. Sugerencias ante errores
El formulario para agregar un nuevo auto detecta algunos de los errores esperados en la digitación de los datos, en próximas versiones se espera continuar mejorando esta norma.
3.3.3.2. Etiquetas e instrucciones
El formulario para agregar un nuevo auto los campos tienen ejemplos como ayuda para el usuario.
3.3.3.1. Identificación de errores
3.3.2.5. Cambios a petición
La aplicación se implementa de tal manera que toda renderizacion se hace cuando el usuario interactua con las diferentes funcionalidades.
3.3.2.4. Identificación coherente
Los servicios y la venta de autos se enlistan por medio de cards, las cuales permiten la identificación del mismo proceso para diferentes componentes.
3.3.2.3. Navegación coherente.
La navegación no varia.
3.3.2.2. Al recibir entradas.
No hay cambios de contexto automaticos en el formulario para agregar un auto.
3.3.2.1. Al recibir el foco
<br>
<h4>Robusto</h4>
3.4.1.1 Procesamiento
  - Se respetan las buenas prácticas respecto a los lenguajes de marcado (HTML)
3.4.2 Nombre, función, valor
  - El código fuente está debidamente marcado para mejorar compatibilidad con dispositivos de asistencia

# Test de usabilidad: carpeta con los videos de los test
https://drive.google.com/drive/folders/1LG08ZEBjTBJZo6V1Z53uS6SIBzQw1kg0?usp=sharing

# Otros
<h4>Licencia:</h4>
El código desarrollado cuenta con licencia MIT. La cual es una licencia de software libre permisivo. Es decir, con requisitos mínimos sobre cómo se puede redistribuir el software, esto es cómo se puede usar, copiar, modificar, reutilizar, integrar con otro software, publicar, vender entre otras actividades.

<h4>Tecnologias usadas:</h4>
El proyecto se lleva a cabo usando frameworks como Express y react. Así mismo se utilizaron lenguajes de programacion como javaScript.
<h4>URL video de funcionalidad:<h4>
https://drive.google.com/file/d/11GsR1EuWlDZRDpEyK6IGmj9ndKJpRAL8/view?usp=sharing
  
<h4>URL de la página corriendo en un servidor público (HerokuAPP):<h4>
http://thecarguide.herokuapp.com
  
