import MenuItem from "./MenuItem";
import {HomeIcon,AdjustmentsIcon,BellIcon} from "../icons/index";

export default function MenuLateral(){
    return(
        <aside>
            <ul>
                <MenuItem icone={HomeIcon} texto="Início" url='/'/>
                <MenuItem icone={AdjustmentsIcon} texto="Ajustes" url='/ajustes'/>
                <MenuItem icone={BellIcon} texto="Notificações" url='/notificacoes'/>

            </ul>
        </aside>
    )
}