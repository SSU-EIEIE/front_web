import Input from "../Input/Input";
import style from "./TabInput.module.scss";

export default function TabInput() {
    return (
        <div className={style.container}>
            <div className={style.id_container}>
                <Input placeHolder={"id@example.com"} />
            </div>
            <div className={style.pw_container}>
                <Input placeHolder={"password"} />
            </div>
            <div className={style.button}></div>
        </div>
    );
}
