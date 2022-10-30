import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import Cabecalho from "./Cabecalho"
import useAppData from "../../data/hook/useAppData"

interface LayourProps {
    titulo: string
    subtitulo: string
    children?: any
}
export default function Layout(props: LayourProps) {
    const {tema}=useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen `}>
            <MenuLateral />
            <div className={` 
                flex 
                flex-col
                bg-gray-300
                dark:bg-gray-800        
                w-full
                 p-7
             `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}