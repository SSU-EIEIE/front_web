import style from "./Login.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { PATHS } from "../../App";

export default function Logout() {
    useEffect(() => {
        logout();
    }, []);
    function logout() {
        axios
            .get("users/logout")
            .then((response) => {
                console.log(response);
                window.open(PATHS.home, "_self");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return <div className={style.container}></div>;
}
