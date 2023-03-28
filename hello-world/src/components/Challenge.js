const Challenge = () =>{
    const num1 = 3;
    const num2 = 2

    return (
        <div>
            <p>numero 1 = 3</p>
            <p>numero 2 = 2</p>
            <button onClick={() => console.log(num1+num2)}>clique aqui para somar os dois numeros</button>
        </div>
    );
}

export default Challenge;