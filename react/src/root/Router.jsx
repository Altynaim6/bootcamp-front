import {Route, Routes} from "react-router-dom";
import Regist from "../pages/Regist/Regist.jsx";
import Login from "../pages/Login/Login.jsx";
import Purchase from "../pages/Purchase/Purchase.jsx";
import Button from "../components/LogOutButton/Button.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

const Router = () => {
    const {isAuth, setIsAuth} = useAuth()
    console.log(isAuth)
    return (
        <>
        {isAuth && <Button/>}
            <Routes>
                {!isAuth ?
                    <>
                        <Route path={"/register"} element={<Regist />}/>
                        <Route path={"/login"} element={<Login />}/>
                    </> :
                    <>
                        <Route path={"/purchase"} element={<Purchase />}/>
                </>
                
            }
            </Routes>
        </>
    );
};

export default Router;