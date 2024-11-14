import BarraNavegacao from './BarraNavegacao';

export default function Pagina({ titulo, children }) {
  return (
    <>
      <BarraNavegacao />
      <div className="container">
        <h1>{titulo}</h1>
        {children}
      </div>
    </>
  );
}
