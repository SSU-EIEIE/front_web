import { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../App";
import style from "./SideBar.module.scss";
import SideBarItem from "./SideBarItem";
export default function SideBar(props: {
    toggleMenu: (isOpen: boolean) => void;
}) {
    const menuList = [
        { name: "제보하기", path: PATHS.report },
        { name: "설정", path: PATHS.setting },
        { name: "로그아웃", path: PATHS.home },
    ];
    const [isLogIn, setIsLogIn] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.side_bar_container}>
                <div className={style.user_container}>
                    <div className={style.cancel_container}>
                        <div
                            className={style.btn_cancel}
                            onClick={() => {
                                props.toggleMenu(true);
                            }}
                        />
                    </div>
                    <div className={style.user_id_container}>
                        {isLogIn ? (
                            <div className={style.user_text}>
                                {"testID@gmail.com"}
                            </div>
                        ) : (
                            <div
                                className={style.login_btn}
                                onClick={() => {
                                    window.open(PATHS.login, "_self");
                                }}
                            >
                                {"로그인하세요 >"}
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.menu_container}>
                    {menuList.map((menu, index) => {
                        return (
                            <Link
                                to={menu.path}
                                key={index}
                                style={{ textDecoration: "none" }}
                            >
                                <SideBarItem name={menu.name} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
