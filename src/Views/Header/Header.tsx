import { useState } from "react";
import { PATHS } from "../../App";
import SideBar from "../Menu/SideBar";
import style from "./Header.module.scss";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(value: boolean) {
        if (value) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className={style.container}>
            <div
                className={style.menu_btn}
                onClick={() => {
                    toggleMenu(isOpen);
                }}
            ></div>
            <div className={style.title}>
                <div className={style.icon} />
                <div className={style.text}>{"WHEEL SAFE"}</div>
            </div>
            <div
                className={style.app_btn}
                onClick={() => {
                    window.open(PATHS.link, "_self");
                }}
            >
                {"APP"}
            </div>
            {isOpen ? (
                <SideBar toggleMenu={toggleMenu} />
            ) : (
                <div style={{ position: "absolute" }} />
            )}
        </div>
    );
}
