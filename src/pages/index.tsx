import Layout from "../components/template/Layout"
import useAuth from "../data/hook/useAuth"
export default function Home() {
  const{displayName}=useAuth()
  
  return (
    <Layout titulo={`Bem vindo ${displayName}`} subtitulo="Aplicação teste">
      <h3>Conteudo!</h3>
    </Layout>
  )
}
