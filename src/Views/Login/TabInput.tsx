import Input from "../Input/Input";
import style from "./TabInput.module.scss";

export default function TabInput(props: { type: "SignUp" | "LogIn" }) {
    return (
        <div className={style.container}>
            <div className={style.id_container}>
                <Input placeHolder={"id@example.com"} />
            </div>
            <div className={style.pw_container}>
                <Input placeHolder={"password"} type={"password"} />
            </div>
            <div className={style.button}>
                {props.type === "SignUp" ? "Sign Up" : "Next"}
            </div>
        </div>
    );
}
