import MenuItem from "./MenuItem";
import { HomeIcon, AdjustmentsIcon, BellIcon, LogoutIcon } from "../icons/index";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {
    const {logout}=useAuth();
    return (
        <aside className={`flex flex-col
        bg-gray-200 text-gray-700
         dark:bg-gray-900
         `}>
            <div className={`h-20 w-20
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-800 to-purple-800
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem icone={HomeIcon} texto="Início" url='/' />
                <MenuItem icone={AdjustmentsIcon} texto="Ajustes" url='/ajustes' />
                <MenuItem icone={BellIcon} texto="Notificações" url='/notificacoes' />

            </ul>
            <ul>
                <MenuItem icone={LogoutIcon} texto="Sair"
                    onClick={logout}
                    className={`
                text-red-600 dark:text-red-400
                hover:bg-red-400 hover:text-white
                dark:hover:text-white
                `}
                />
            </ul>
        </aside>
    )
}