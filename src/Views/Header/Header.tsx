import style from "./Header.module.scss";
export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.menu_btn} />
            <div className={style.title}>
                <div className={style.icon} />
                <div className={style.text}>{"WHEEL SAFE"}</div>
            </div>
            <div className={style.app_btn}>{"APP"}</div>
        </div>
    );
}
