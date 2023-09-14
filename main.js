


function sumarMontos () {
    const elementos = document.querySelectorAll(".monto");

    let suma = 0

    elementos.forEach(elemento => {
        const valor = parseFloat(elemento.value) || 0;
        suma += valor;
    })

    if (suma === 0) {
        alert ("Debes completas al menos 1 campo");
    }


        
    const totalElement = document.getElementById("total");
    totalElement.textContent = "Total: " + suma.toFixed(2);
        
}

function reiniciarMontos () {
    const elementos = document.querySelectorAll(".monto, .agregarItem");
        elementos.forEach (elemento => {
            elemento.value = "" ;
        })
    const totalElement = document.getElementById("total");
    totalElement.textContent = "Total:";
        
    
}

function agregarCategoria () {
   // let nuevaCategoria = document.querySelector (".agregarItem")
    const nombre = document.querySelector (".agregarItem");

    const div = document.createElement("div");
    div.className = "items";

    const label = document.createElement("label");
    label.setAttribute("for", nombre);

    const h4 = document.createElement ("h4");
    h4.textContent = nombre.value;

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Ingrese el monto";
    input.className = "monto";
    input.id = nombre;

    label.appendChild(h4);

    div.appendChild(label);
    div.appendChild(input);
    
    document.body.appendChild(div);

    const container = document.querySelector(".container");
    container.appendChild(div);
}

