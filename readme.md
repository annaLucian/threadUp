![TreadUpLogo](https://i.imgur.com/pAyu6Dt.png) 
# TreadUp Marketplace 
## ¡Dale una nueva vida y exprésate con estilo!

Este proyecto desarrolla una tienda online de compra y venta de ropa de segunda mano, haciendo hincapié en los estándares de calidad y variedad de estilos para hombre y mujer.

Se pretende contar con servicio de recolección de prendas en nuestras tiendas físicas ubicadas en principales ciudades o a través de envío.

## Herramientas y tecnologías utilizadas

**Comunes:**
- Visual Studio Code.
- Javascript.
- Jira.
- Canva.
- Discord/Zoom.

**Frontend:**
- React con Vite.
- HTML/CSS.
- Tailwind.
- Gsap.

**Backend:**
- MySQL Workbench.
- Aiven (Cloud MySQL).
- Render (despliegue online).
- NodeJS con express.
- Sequelize.

## Instalación de la plataforma:

**Prerequisitos para instalar en local:**

- Node.js y npm instalados.
- Git para clonar el repositorio.

**Clonar este repositorio**
```bash
git clone https://github.com/annaLucian/threadUp
```

**Instalar dependencias**

Ambas carpetas contenidas en este repositorio (backendNode y frontendReact) deben abrirse por separado en un terminal y ejecutar la instalación de las dependencias utilizando:

`npm install`


**Ejecución de la app**

Una vez que las dependencias se encuentren instaladas, puede ejecutarse la app con los siguientes comandos:

Dentro de la carpeta backendNode:
```bash
nodemon app.js
```

Dentro de la carpeta frontendReact:
```bash
npm start
```

Teniendo ambos servicios en funcionamiento, podemos dirigir nuestro navegador [aquí](http://localhost:5173) para acceder a la interfaz gráfica.

Mediante herramientas como [Postman](https://www.postman.com/downloads/) es posible poner a prueba la funcionalidad CRUD del backend, apuntandolo a http://localhost:8000/inicio.

Podremos realizar:

- GET /inicio

Devuelve todos los productos

- GET	/inicio/:id

Devuelve un producto en específico 

- POST	/inicio

Añade un nuevo producto

- PUT	/inicio/:id

Modifica un producto existente

- DELETE	/inicio/:id

Elimina un producto

**Uso de la plataforma online**

Es posible acceder a los despliegues online tanto de [frontend]() como de [backend](https://threadup-iajq.onrender.com/inicio).

La base de datos se encuentra alojada en la nube por lo que no es necesario instalarla.