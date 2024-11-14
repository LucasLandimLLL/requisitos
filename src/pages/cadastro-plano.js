// src/app/page.js
import FormPerfil from "../components/FormCadastroPlano";
import Pagina from "../components/Pagina";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {
  return (
    <Pagina titulo="Cadastro de Planos">
      <FormPerfil />
    </Pagina>
  );
}
