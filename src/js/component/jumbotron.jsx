import React from "react"

export default function Jumbotron(){
    return(
    <div className="p-4 shadow-4 rounded-3" style={{"backgroundColor": "hsl(0, 0%, 94%)"}}>
        <h1 className="text-center">Symbiosis SpA</h1>
        <h2>¿Qué son los Microgreens?</h2>
        <p>Los microgreens, brotes o microhortalizas, son pequeñas plantas comestibles, 
            cosechadas entre los 7 a 20 días luego de la siembra. A diferencia de los germinados, 
            solo se consumen las hojas y tallos de las plantas. Se usan principalmente para decoración 
            de platos y como complemento nutritivo. 
        </p>
        <hr className="my-4" />
        <p><b>¿Para que sirven?</b></p>
        <p>Gracias a su versatilidad en colores, texturas y sabores, los microgreens se utilizan en la 
            cocina internacional para emplatado gourmet, tanto en platos principales como en ensaladas y postres. 
            Son usados de manera muy similar a las flores comestibles y germinados.</p>
        <p><b>Nutrición</b></p>
        <p>Según estudios de la Universidad de Maryland, los microgreens contienen hasta 40 veces más nutrientes 
            que sus versiones adultas. Lo que significa que solo bastan unos pocos gramos para obtener gran cantidad de nutrientes.
            Los microgreens son el complemento perfecto para agregar a tus preparaciones, entregándote ese punch de vitaminas que tu cuerpo merece.</p>
        <button type="button" className="btn btn-primary">
            Más información
        </button>
</div>
    )
}
