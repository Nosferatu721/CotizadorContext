export function getDiffYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  const incrementoMarca = {
    1: 1.3,
    2: 1.15,
    3: 1.05,
  };
  return incrementoMarca[marca];
}

export function calcularPlan(plan) {
  return plan === '1' ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return Number(cantidad).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
