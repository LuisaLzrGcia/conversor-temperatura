const convertir = () => {
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const fahrenheitInput = document.getElementById("fahrenheit");

    const celsiusVal = parseFloat(celsiusInput.value);
    const kelvinVal = parseFloat(kelvinInput.value);
    const fahrenheitVal = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusVal)) {
        kelvinInput.value = (celsiusVal + 273.15).toFixed(2);
        fahrenheitInput.value = (celsiusVal * 9 / 5 + 32).toFixed(2);
    } else if (!isNaN(kelvinVal)) {
        celsiusInput.value = (kelvinVal - 273.15).toFixed(2);
        fahrenheitInput.value = ((kelvinVal - 273.15) * 9 / 5 + 32).toFixed(2);
    } else if (!isNaN(fahrenheitVal)) {
        celsiusInput.value = ((fahrenheitVal - 32) * 5 / 9).toFixed(2);
        kelvinInput.value = (((fahrenheitVal - 32) * 5 / 9) + 273.15).toFixed(2);
    } else {
        alert("Por favor ingresa un valor en uno de los campos.");
        return;
    }
};

const borrar = () => {
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("fahrenheit").value = "";

    document.getElementById("celsius").disabled = false;
    document.getElementById("kelvin").disabled = false;
    document.getElementById("fahrenheit").disabled = false;
};

const celsius = (e) => {
    limpiarCerosIniciales(e);
    const val = e.value;
    if (val.length > 0) {
        document.getElementById("kelvin").disabled = true;
        document.getElementById("kelvin").value = "";

        document.getElementById("fahrenheit").disabled = true;
        document.getElementById("fahrenheit").value = "";
    } else {
        document.getElementById("kelvin").disabled = false;
        document.getElementById("fahrenheit").disabled = false;
    }
}



const kelvin = (e) => {
    limpiarCerosIniciales(e);
    const val = e.value;
    if (val.length > 0) {
        document.getElementById("celsius").disabled = true;
        document.getElementById("celsius").value = "";

        document.getElementById("fahrenheit").disabled = true;
        document.getElementById("fahrenheit").value = "";
    } else {
        document.getElementById("celsius").disabled = false;
        document.getElementById("celsius").value = "";
        document.getElementById("fahrenheit").disabled = false;
        document.getElementById("fahrenheit").value= "";
    }
}

const fahrenheit = (e) => {
    limpiarCerosIniciales(e);
    const val = e.value;
    if (val.length > 0) {
        document.getElementById("celsius").disabled = true;
        document.getElementById("celsius").value = "";

        document.getElementById("kelvin").disabled = true;
        document.getElementById("kelvin").value = "";
    } else {
        document.getElementById("celsius").disabled = false;
        document.getElementById("kelvin").disabled = false;
    }
}

const limpiarCerosIniciales = (e) => {
    if (e.value.length > 1 && e.value.startsWith("0")) {
        e.value = e.value.replace(/^0+/, '');
    }
};