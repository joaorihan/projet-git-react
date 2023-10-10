# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Iniciando a criação de ROTAS com react-router-dom
## Instalando a dependencia no projeto 
- npm install react-router-dom;
## Criar a pasta routes
-Criar a pasta routes
## As rotas ou páginas
-Criando as rotas/paginas [HOME, EditarProdutos, Produtos e Erro404]
## Importar os onjetos da rotas no main.jsx
- import { createBrowserRouter, RouterProvider } from 'react-router-dom';
- import Home e outros
## Criando o objeto de rotas com o crateBrowserRouter.
- const router = createBrowserRouter();
## Trocar o componente <App/> pelo componte <RouterProvider/> no ReactDOM.render.
- ReactDOM.render(
    <React.StrictMode>
    +     <RouterProvider/>
    + </React.StrictMode>
);
## Adicionando a props router ao componente RouterProvider.
- ReactDOM.render(
    <React.StrictMode>
    +     <RouterProvider router={router}/>
    + </React.StrictMode>
);
## Vamos adicionar o componente Outlet em App.
-  return (
    +    <>
    +        <Outlet />
    +       </>
    )
    ## Ou seja, vai ficar assim:
    return (<>)
    # Rotas dinâmicas
    