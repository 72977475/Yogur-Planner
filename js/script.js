function calcularPromedio() {
    const mes1 = parseFloat(document.getElementById("mes1").value);
    const mes2 = parseFloat(document.getElementById("mes2").value);
    const mes3 = parseFloat(document.getElementById("mes3").value);

    // datos válidos
    if (isNaN(mes1) || isNaN(mes2) || isNaN(mes3) || mes1 <= 0 || mes2 <= 0 || mes3 <= 0) {
        alert("Por favor ingresa valores válidos para los tres meses (valores mayores a 0).");
        return;
    }

    // Promedios
    const promedioExacto = (mes1 + mes2 + mes3) / 3;
    const promedioVasos = Math.round(promedioExacto);

    // Redondeo
    document.getElementById("promedio").textContent = `${promedioVasos} vasos`;
    document.getElementById("promedioExacto").textContent = `(${promedioExacto.toFixed(2)})`;

    // Texto
    document.getElementById("Salida").querySelector("h2").textContent = `Para la producción de ${promedioVasos} vasos de yogurt se necesitará`;


    mostrarResultados(promedioVasos);
    document.getElementById("Salida").style.display = "block"; 
    mostrarComposicionVaso();
}


function convertirAGramosYKilogramos(gramos) {
    
    if (gramos >= 1000) {
        const kilos = gramos / 1000;  
        return `${kilos.toFixed(2)} kg (${gramos} g)`;  
    } else {
        return `${gramos} g`;  
    }
}

function mostrarResultados(promedioVasos) {
    const lechePorVaso = 55.8; 
    const azucarPorVaso = 4.2; 
    const pulpaFrutaPorVaso = 32; 
    const azucarPulpaFrutaPorVaso = 8;

    // Ecuaciones
    const totalLeche = lechePorVaso * promedioVasos;
    const totalAzucar = azucarPorVaso * promedioVasos;
    const totalPulpaFruta = pulpaFrutaPorVaso * promedioVasos;
    const totalAzucarPulpaFruta = azucarPulpaFrutaPorVaso * promedioVasos;

    // Pasar a html
    document.getElementById("leche").textContent = `Leche: ${convertirAGramosYKilogramos(totalLeche)}`;
    document.getElementById("azucar").textContent = `Azúcar: ${convertirAGramosYKilogramos(totalAzucar)}`;
    document.getElementById("pulpaFruta").textContent = `Pulpa de fruta: ${convertirAGramosYKilogramos(totalPulpaFruta)}`;
    document.getElementById("azucarPulpaFruta").textContent = `Azúcar de la pulpa de fruta: ${convertirAGramosYKilogramos(totalAzucarPulpaFruta)}`;
}

// Vaso
function mostrarComposicionVaso() {
    const lechePorVaso = 55.8; 
    const azucarPorVaso = 4.2; 
    const pulpaFrutaPorVaso = 32; 
    const azucarPulpaFrutaPorVaso = 8; 

    document.getElementById("lechePorVaso").textContent = lechePorVaso.toFixed(1);
    document.getElementById("azucarPorVaso").textContent = azucarPorVaso.toFixed(1);
    document.getElementById("pulpaFrutaPorVaso").textContent = pulpaFrutaPorVaso.toFixed(1);
    document.getElementById("azucarPulpaFrutaPorVaso").textContent = azucarPulpaFrutaPorVaso.toFixed(1);
}

// BOTÓN
document.getElementById("calcular").addEventListener("click", calcularPromedio);
