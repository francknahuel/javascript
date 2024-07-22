// Función para calcular el costo de construcción
function calcularCostoConstruccion() {
        const costoPorMetroCuadrado = 1000; // Costo estimado por metro cuadrado (ajusta según tu contexto)
    
        // Solicitamos al usuario los metros cuadrados de la casa
        const metrosCuadrados = parseFloat(prompt("Ingresa los metros cuadrados de la casa:"));
    
        // Validamos que el usuario haya ingresado un número válido
        if (!isNaN(metrosCuadrados) && metrosCuadrados > 0) {
            // Calculamos el costo total
            const costoTotal = costoPorMetroCuadrado * metrosCuadrados;
    
            // Mostramos el resultado
            alert(`El costo estimado de construir una casa de ${metrosCuadrados} metros cuadrados es: $${costoTotal.toFixed(2)}`);
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
    