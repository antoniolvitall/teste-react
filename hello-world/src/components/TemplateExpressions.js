const TemplateExpressions = () => {

    const name = "Antonio"
    const data = {
        age: 32,
        job: "Dev",
    };

    return (
        <div>
            <h1>Ola, me chamo {name}.</h1>
            <p>Eu tenho {data.age} e atuo como {data.job}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions