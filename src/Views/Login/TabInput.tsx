import { PATHS } from "../../App";
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
            <div
                className={style.button}
                onClick={() => {
                    window.open(PATHS.home, "_self");
                    // TODO: 조건처리 필요
                }}
            >
                {props.type === "SignUp" ? "Sign Up" : "Next"}
            </div>
        </div>
    );
}
