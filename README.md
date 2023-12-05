# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-isLoadingContext is true cuando se cargan paginas completas
-isSubmiting is true cuando se hace el request a la api (Desahibilitando los input, el boton submit y ofreciendo algun indicativo para el usuario de que se esta procesando la request). Si la request retorna error, mostrar mensaje de error, sino isLoading true y redireccion a la pagina correspondiente (Por ejemplo resultados)
-Cuando carga una seccion puntual, como la seccion oportunidades dentro de la home, implementar un estado isLoading ad-hoc
-searchopportunities no tiene buen responsive
-browseropportunities hay que agregar flechas segun corresponda para indicar que se puede scrolear. Cuando esta en uno de los topes quitar la flecha de ese tope
-Menu mobile abre en una posicion incorrecta
-Rotar las logicas para priorizar el mobile
-Ajustar el scroll automatico cuando se elije una opcion de browseropportunity

Corregir:
-Clase pisada de material ui en app.css

Preguntar
-Si usan sx, estilos en linea, clases css en archivo separado para cada componente
