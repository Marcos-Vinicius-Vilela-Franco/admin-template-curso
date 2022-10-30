const { useContext } = require("react");
import AppContext from'../context/AppContext'


const useAppData = ()=> useContext(AppContext)

export default useAppData