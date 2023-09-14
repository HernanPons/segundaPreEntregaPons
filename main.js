


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
    const nombre = document.querySelector (".agregarItem");
    const tipoDeGasto = document.getElementById ('fijoVariable').value

    const div = document.createElement("div");
    div.className = "items";

    const label = document.createElement("label");
    label.setAttribute("for", nombre);

    const h4 = document.createElement ("h4");
    h4.textContent = nombre.value;

    const nuevoObjeto = {
        tipo: tipoDeGasto,
        labelFor: nombre.value,
        imputType: "number",
        imputPlaceholder: "Ingrese el monto",
        inputClass: "monto",
        inputId: nombre.value,     
    }

    console.log(nuevoObjeto)
    categoriasBase.push(nuevoObjeto);


    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Ingrese el monto";
    input.className = "monto";
    input.id = nombre;

    const crearTipoDeGasto = document.createElement ("p")
    crearTipoDeGasto.textContent = tipoDeGasto

    const button = document.createElement ("button")
    button.textContent = "eliminar"
    button.className = "eliminar"

    button.addEventListener ("click", function() {
        div.remove()
    })

    label.appendChild(h4);

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(crearTipoDeGasto)
    div.appendChild(button);

    document.body.appendChild(div);

    const container = document.querySelector(".container");
    container.appendChild(div);
}


////////////////////////////////////////////////////////////////

const categoriasBase = [
    {
        tipo: 'fijo',
        labelFor: 'alquiler',
        labelText: "Alquiler",
        inputType: "number",
        inputPlaceholder: "Ingrese el monto",
        inputClass: "monto",
        inputId: "alquiler"
    },
    {
        tipo: 'variable',
        labelFor: 'electricidad',
        labelText: 'Electricidad',
        inputType: 'number',
        inputPlaceholder: 'Ingrese el monto',
        inputClass: 'monto',
        inputId: 'electricidad'
    },
    {
        tipo: 'fijo',
        labelFor: 'seguros',
        labelText: 'Seguros',
        inputType: 'number',
        inputPlaceholder: 'Ingrese el monto',
        inputClass: 'monto',
        inputId: 'seguros'
    },
    {
        tipo: 'fijo',
        labelFor: 'internet',
        labelText: 'Internet',
        inputType: 'number',
        inputPlaceholder: 'Ingrese el monto',
        inputClass: 'monto',
        inputId: 'internet'
    }

];


console.log (categoriasBase)


const datosBusqueda = {
    tipo: 'fijo',

}
function filtrarFijoVariable() {
    const tipoABuscar = 'fijo';

    const resultados = categoriasBase.filter(categoria => {
        return categoria.tipo === tipoABuscar;
    });

    console.log(resultados);
}


