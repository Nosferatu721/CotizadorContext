import useCotizador from '../hooks/useCotizador';

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className='border text-center border-red-400 bg-red-100 text-red-700 uppercase py-2 font-bold'>
      <p>{error}</p>
    </div>
  );
};

export default Error;
