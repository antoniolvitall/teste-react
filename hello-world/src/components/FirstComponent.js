// arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // essa funcao cria os componentes

    /* 
        comentario de multiplas linhas
     */
    return (
        <div>
            {/* comentario aqui */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;