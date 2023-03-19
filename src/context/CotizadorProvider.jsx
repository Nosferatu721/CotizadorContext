import { createContext, useState } from 'react';
import { getDiffYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    let diffYear = getDiffYear(datos.year);

    // Hay que restar el 3% por cada año
    resultado -= (diffYear * 3 * resultado) / 100;

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    // Básico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan);

    resultado = resultado.toFixed(2);
    resultado = formatearDinero(resultado);

    setResultado(resultado);
  };

  return <CotizadorContext.Provider value={{ datos, handleChangeDatos, error, setError, cotizarSeguro }}>{children}</CotizadorContext.Provider>;
};

export { CotizadorProvider };

export default CotizadorContext;
