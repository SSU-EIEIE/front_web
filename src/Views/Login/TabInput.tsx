import style from "./TabInput.module.scss";

export default function TabInput() {
    return (
        <div className={style.container}>
            <div className={style.id_container}></div>
            <div className={style.pw_container}></div>
            <div className={style.button}></div>
        </div>
    );
}
