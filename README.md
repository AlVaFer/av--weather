
### PRUEBA TÉCNICA ALVARO VALLEJOS FERNÁNDEZ PARA VICENS VIVES, 10 octubre 2021

### NOTAS DEL PROGRAMADOR:
He añadido la funcionalidad extra de que al buscar una ciudad que ya existe, se activa y muestra en bloque Detalle. Cuando el valor introducido en búsqueda es, por ejemplo, 000, muestra el mensaje de error.

En algunos casos he dejado aisladas las funcionalidades para una hipotética reutilización futura en otros componentes. Por ejemplo en uno de los componentes uso un thunk que incluye varios dispatches, y en otro varios dispatches aislados. Luego en proyecto real dependerá de la posible escalabilidad, pero quería mostrar los dos modos. 

Algunos action creators están testeados en la carpeta de integrationTests para su testeo conjunto con reducers.

Creé un currentIndex en estado global de redux y asigné el valor -2 para cuando hay error, de ese modo no tengo que gestionarlo con otras variables. Con -1 no muestra el bloque de Detalle. Con 0 muestra el primero.

Usé React 17, hooks, hooks de Redux, Redux Thunk, tests de hooks, TDD, Axios, Moxios, un adaptador de Enzyme para React 17, data-tests, helpers para refactorización de tests, Jest, Enzyme, linter XO, JSDoc, rutas absolutas, variables de entorno, Sass, Bootstrap, iconos, algunos polyfills.

He testeado componentes, actions, reducers, thunks, helpers y algunos tests de integración. Hice un test snapshot por añadir mayor variedad de técnicas entendiendo que en TDD no se usan.

Escribí algunos JSDocs pero no todos porque es repetitivo y amplio.

En ocasiones puntuales he combinado Sass con Bootstrap por hacer cosas diferentes comprendiendo que en proyecto real pocas veces se haría. 

Hay pocos comentarios porque en las empresas donde trabajé seguíamos el principio de codificar de modo que el código se explique solo. En caso de pertenecer futuramente a vuestra empresa me adaptaría a las metodologías comunes. 

Los console.log en los catch de las llamadas a api en mi empresa los dejan y por inercia lo he programado de ese modo. Otra solución sería crear un objeto con {state, isLoading, error} y un type ERROR que se dispare en el catch cuando hay error y los guarde.

Encontré el problema de que los valores del panel derecho de Zeplin no coincidían con las imágenes. Concretamente el color gris de fondo rgba(192, 192, 192, 0.5), el box-shadow y algún otro. He considerado preferente lo que veía en las imágenes.

He tenido problema instalando node-sass y lo resolví de este modo, espero que no tengáis problemas vosotros:

npm install -g mirror-config-china --registry=http://registry.npm.taobao.org
npm install node-sass

Si tenéis problemas al instalar con 'npm i' podéis eliminar la línea de node-sass en package.json dado que el sass ya está compilado. 

### PROBAR
Para arrancar servidor: npm run start

Para arrancar tests: npm run test

### DOCUMENTACIÓN

Existe documentación de la aplicación en documentacion/index.html
### OTROS

Considero que hay un error en enunciado, pero para que se vea idéntico al diseño he respetado vuestro enunciado:

En ‘Min.’ habría que poner ‘Mín.:’
En ‘Max.’ habría que poner ’Máx.:’

No es necesario usar la librería indicada de icons pero igualmente lo implementé según el enunciado. Los iconos se podrían incluir del siguiente modo:

  <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
   />
