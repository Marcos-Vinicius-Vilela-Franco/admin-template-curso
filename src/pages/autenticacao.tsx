import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon, LogoutIcon, WarnIcon } from "../components/icons";


export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [erro, setErro] = useState(null)

    function submeter() {
        if (modo === 'login') {

        } else {

        }
    }

    function showErro(msg, time=5){
        setErro(msg)
        setTimeout(()=>setErro(null),time*1000)
    }


    return (
        <div className={`bg-gray-100 flex  h-screen items-center justify-center `}>
            <div className="hidden md:block md:w-1/2 lg:2/3">
                <img className="h-screen w-full object-cover" src="https://source.unsplash.com/random" alt="Imagem da tela de Autenticação" />
            </div>
            <div className={` w-full md:w-1/2 text-black m-10 lg:1/3`}>

                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com sua conta' :
                        'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div className={`
                        flex items-center
                       bg-red-400 text-white
                         py-3  px-5 my-2 border border-red-700 rounded-lg
                   `}>
                        {WarnIcon()}
                        <span className="ml-3">Ocorreu um erro fatal!</span>

                    </div>
                ) : false}

                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />
                <button onClick={submeter} className={`
                     w-full bg-indigo-500 hover:bg-indigo-400
                     text-white rounded-lg px-4 py-3 mt-6 `}>

                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className={`my-6 border-gray-300 w-full`} />
                <button onClick={submeter} className={`
                 w-full bg-red-500 hover:bg-red-400
                 text-white rounded-lg px-4 py-3  `}>
                    Entrar com Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Criar uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">Já faz parte?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                        `}> Entre com suas credenciais
                        </a>
                    </p>
                )}

            </div>
        </div>
    )
}

