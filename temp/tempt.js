function convertCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("fahrenheit");
    var kelvinOutput = document.getElementById("kelvin");
    var celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      var kelvin = celsius + 273.15;
      
      fahrenheitOutput.value = fahrenheit.toFixed(2);
      kelvinOutput.value = kelvin.toFixed(2);
    } else {
      fahrenheitOutput.value = "";
      kelvinOutput.value = "";
    }
    updateBackgroundColor();
  }
  
  function convertFahrenheit() {
    var celsiusOutput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinOutput = document.getElementById("kelvin");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(fahrenheit)) {
      var celsius = (fahrenheit - 32) * 5/9;
      var kelvin = (fahrenheit - 32) * 5/9 + 273.15;
      
      celsiusOutput.value = celsius.toFixed(2);
      kelvinOutput.value = kelvin.toFixed(2);
    } else {
      celsiusOutput.value = "";
      kelvinOutput.value = "";
    }
    updateBackgroundColor();
  }
  
  function convertKelvin() {
    var celsiusOutput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var kelvin = parseFloat(kelvinInput.value);
    
    if (!isNaN(kelvin)) {
      var celsius = kelvin - 273.15;
      var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
      
      celsiusOutput.value = celsius.toFixed(2);
      fahrenheitOutput.value = fahrenheit.toFixed(2);
    } else {
      celsiusOutput.value = "";
      fahrenheitOutput.value = "";
    }
    updateBackgroundColor();
  }
  
  function updateBackgroundColor() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
  
    // Choose a color based on the temperature values
    var temperature = celsius || fahrenheit || kelvin;
    var hue = Math.min((temperature / 100) * 120, 120);
  
    document.body.style.backgroundColor = "hsl(" + hue + ", 80%, 80%)";
  }