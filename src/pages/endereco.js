// src/app/page.js
import FormPerfil from "../components/FormEndereco";
import Pagina from "../components/Pagina";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
  return (
    <Pagina titulo="Endereço">
      <FormPerfil />
    </Pagina>
  );
}
