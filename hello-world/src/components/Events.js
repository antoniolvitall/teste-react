const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!")
    };
 
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tambem!</button>
                <button onClick={() => {
                    if (true){
                        console.log("Isso nao deveria estar aqui")
                    }
                }                    }
                    >Clique aqui por favor!</button>
            </div>
        </div>
    );
};

export default Events;