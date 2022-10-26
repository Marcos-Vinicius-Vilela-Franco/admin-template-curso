import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import Cabecalho from "./Titulo"

interface LayourProps {
    titulo: string
    subtitulo: string
    children?: any
}
export default function Layout(props: LayourProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <MenuLateral />
            <div className={` dark
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