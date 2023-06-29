const tasasDeCambio = {
  USD: {
    EUR: 0.90,
    BSV: 29.5,
    COP: 5000
  },
  EUR: {
    USD: 1.18,
    BSV: 29.5,
    COP: 5000
  },
  BSV: {
    USD: 29.5,
    EUR: 29,
    COP: 151.49
  },
  COP: {
    USD: 4.177,
    EUR: 4.565,
    BSV: 151
  }
};

function convertirDivisa() {
  const cantidad = parseFloat(prompt('Ingrese la cantidad a convertir:'));
  const divisaOrigen = prompt('Ingrese la divisa de origen (USD, EUR, BSV, COP):');
  const divisaDestino = prompt('Ingrese la divisa de destino (USD, EUR, BSV, COP):');

  if (!tasasDeCambio.hasOwnProperty(divisaOrigen) || !tasasDeCambio[divisaOrigen].hasOwnProperty(divisaDestino)) {
    alert('No se encontró una tasa de cambio para la conversión especificada.');
    return;
  }

  const tasaDeCambio = tasasDeCambio[divisaOrigen][divisaDestino];
  const cantidadConvertida = cantidad * tasaDeCambio;

  alert(cantidad + ' ' + divisaOrigen + ' equivale a ' + cantidadConvertida + ' ' + divisaDestino);
}