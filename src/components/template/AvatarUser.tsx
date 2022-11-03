import Link from "next/link"
import useAuth from "../../data/hook/useAuth"
import Image from 'next/image'


export default function AvatarUser() {
    const { usuario } = useAuth()
    
    return (
        <Link href="/perfil">
            <Image  src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
            alt="Avatar do usuário"
            width={40}
            height={40} 
            className={`rounded-full cursor-pointer`}/>
        </Link>
    )
}