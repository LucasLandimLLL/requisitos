// src/app/page.js
import FormPerfil from "../components/FormPlanoLoja";
import Pagina from "../components/Pagina";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
  return (
    <Pagina titulo="Plano da Loja">
      <FormPerfil />
    </Pagina>
  );
}
