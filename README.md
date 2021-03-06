# TimeInn-api

P4: JS Asincron i APIs

- Els arxius de les APIs es troben dins `/api/db`.

- Es fa servir Parcel per generar la versió de producció, per tant, per poder iniciar el projecte cal en primer lloc instal.lar les dependències amb `npm install` i en segon lloc executar l'escript `npm run start`. Es poden trobar els diferents scripts per llançar la web o les APIs al `package.json`.

- S'ha afegit un _logout_ en clicar sobre el nom de l'usuari actiu que es troba al _header_. Aquest _logout_ borra totes les _cookies_ actives de l'usuari.

- Les imatges de la web es carreguen fent servir un `fetch` a la url de l'API i després fent un altre `fetch` amb `blob` per carregar les imatges que es troben al repositori, dins la carpeta `images`.

- A la pàgina d'events, si es clica sobre la imatge d'un event, es crida a la API per recollir, fent servir l'id de l'event, les dades de l'event i es renderitza a la mateixa pàgina. Per tonar a carregar tots els events, només cal clicar al botó 'All Events'.

- S'han afegit totes les funcionalitats de CRUD per als events.

- Es poden registrar i fer login d'usuaris. A la base de dades `users.json` hi ha alguns usuaris que es poden fer servir o afegir-ne de nous.

- Les noticies tant a la front-page com a la pàgina de noticies, només es mostrin si l'usuari está 'logejat', en cas de no estar-ho, es mostra un misatge de que la secció es d'ús restringit. Aixó s'aconsegueix fent servir el _token_ de l'usuari y una _cookie_ per emmagatzemar-lo.

## P2 TimeInn

### _INFO_

Team: Victoria Pelaez & Antonio Morell

- [Netlify]()
- Used production version generator: [Parcel](https://parceljs.org/)

### _FONTS_

![fuentes de Google](https://github.com/amorellb/TimeInn/blob/main/docs/font_palette.PNG)

### _COLOR PALETTE_

![paleta de colores](https://github.com/amorellb/TimeInn/blob/main/docs/color_palette.PNG)

### _INSPIRATION_

[Liceu de Barcelona](https://www.liceubarcelona.cat/es)

### _EXTENSIONS_

- Edit: Se ha añadido una funcionalidad que permite editar los eventos existentes en la página.
- Filter: Se ha añadido una funcionalidad a la página que permite filtrar los eventos por tipo de evento mediante unos botones predeterminados, filtrar los eventos por fechas y filtrar los eventos por palabras, donde se buscará que la palabra introducida como input se encuentre el el título de alguno de los eventos.
- Production Version: Para generar una versión de producción mediante paquetes de npm, se sugería utilizar para la práctica el paquete Gulp, sin embargo, por problemas a la hora de descargar e instalar el paquete, se ha decidido utilizar el paquete Parcel, el cual es muy sencillo de utilizar puesto que no es necesario realizar ninguna configuración. Para construir la aplicación, después de haber instalado el paquete con el comando `npm install parcel`, deberemos ejecutar sobre la raíz del proyecto el comando `npm run build` y para iniciar la aplicación en local debemos ejecutar el comando `npm run start`.
- Netlify: Se ha desplegado la aplicación en [Netlify](https://focused-neumann-3c3171.netlify.app. Para el despliegue se ha utilizado la versión comprimida generada por el paquete Parcel, indicando el directorio `dist` como directorio de publicación y el comando `npm run build` para construir la aplicación.

### _OTHERS_

- Se ha añadido una imagen como logo que nos permite redirigirnos desde cualquier página a la página de inicio.
- Se han añadido dos páginas extra: una página de evento o de compra de tickets y una página en la que se muestram todas las noticias.
- El header y el footer se generan mediante JavaScript para todas la páginas de la web.
  - En el header podemos utilizar los botones para navegar por algunas de las secciones o páginas del la web.
- En la segunda sección de la frontpage, donde se muestran los tres eventos más próximos, esto se hace mediante un carrousel de imágenes, en el que podemos navegar lateralmente clicando sobre las flechas que se encuentran a cada lado de la sección.
- En la sección del calendario de la frontpage, tanto los días de la semana como los días del mes son botones, de manera que podría ampliarse la web haciendo que se pueda navegar antre los eventos del mes.
- En los formularios, tanto el de la frontpage como el formulario de la página de eventos, se ha hecho que este se cierre tanto si se clica el botón en forma de X como si se clica fuera del formulario. Además, se ha añadido una capa entre el formulario y la página para simular un difuminado de la página al quedar detrás del formulario.
- En la página en que se muestran todas las noticias, se ha añadido un botón a la vista móvil que permite mostrar el contenido de la noticia que se encuentra escondido inicialmente.
- Para todos los botones y elementos clicables de la página web, se ha añadido que con la acción hover el puntero cambie de forma, indicando así al usuario que se trata de un elemento clicable.
- Se ha añadido una transición para el botón scroll-up, de forma que el botón se esconda con una animación sencilla y que el scroll de la página se haga de forma suave.
- Se ha añadido una funcionalidad para hacer que el formulario de subscripción de la frontpage aparezca cuando un determinado porcentaje de la segunda sección de la página aparece en la pantalla. Esto se hace mediante una función que comprueba la intersección entre dicha sección y el viewport.

## P3 TimeInn Forms

### Sign up

- User name max length: El nombre de usuario tiene una longitud máxima de 10 caracteres.
- User password: La contraseña ha de seguir el siguiente patrón: /^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  Debe contener mínimo: 1 minúscula, 1 mayúscula,1 número entre 0 y 9, un carácter especial de los definidos. La contraseña tendrá un mínimo de 8 carácteres y no hemos establecido un máximo, pudiendo ser lo larga que el usuario desee.

### Log in

El log-in genera una cookie de sesión con el nombre de usuario, que permite que se muestre el nombre del usuario en el header. Esta cookie es de sesión y por lo tanto se eliminará cuando caduque la sesión. Esto ocurre cuando se cierra completamente el navegador que se esté utilizando, no basta solo con cerrar la ventana, se debe cerrar completamente la aplicación para que el propio navegador elimine la cookie.

### _OTHERS_

- Se ha implementado que al clickar el icono "usuario" del header, se redireccione hacia la página login que también contiene un botón por si el usuario aún no está logueado, pueda registrase.
- Para que el usuario se pueda registrar, debe aceptar la casilla de la politica de Privacidad.
- Los datos de cada usuario se almacenan en el _local storage_ del navegador, de manera que se crea una persistencia de esos datos en el navegador.
- Se solicitaba mínimo 3 describe (tests) pero se han realizado 6.
- Cuando el usuario se registra y sale el mensaje de resgistro completado, se redirecciona a la página para logearse.
