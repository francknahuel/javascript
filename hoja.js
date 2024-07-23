// Función para calcular el costo de construcción
function calcularCostoConstruccion() {
        const costoPorMetroCuadrado = 1213; 
    
        
        const metrosCuadrados = parseFloat(prompt("Ingresa los metros cuadrados a construir de la casa:"));
    
        
        if (!isNaN(metrosCuadrados) && metrosCuadrados > 0) {

            const costoTotal = costoPorMetroCuadrado * metrosCuadrados;
            alert(`El costo estimado de construir una casa de ${metrosCuadrados} metros cuadrados es: $${costoTotal.toFixed(2)} dolares`);
        } else {
            alert("Por favor, ingresa una cantidad válida de metros cuadrados.");
        }
    }
    
    // Función para preguntar si se desea repetir la operación
    function preguntarRepetir() {
        const respuesta = prompt("¿Deseas calcular el costo de otra casa? (Sí/No)");
        return respuesta === "si" || respuesta === "si";
    }
    
    // Ciclo principal
    do {
        calcularCostoConstruccion();
    } while (preguntarRepetir());
    
    alert("¡Gracias por usar el calculador de costos de construcción!");
    