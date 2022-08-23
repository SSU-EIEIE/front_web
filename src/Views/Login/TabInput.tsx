import { useState } from "react";
import { PATHS } from "../../App";
import Input from "../Input/Input";
import style from "./TabInput.module.scss";
import axios from "axios";

export default function TabInput(props: { type: "SignUp" | "LogIn" }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function connect() {
        const body = {
            email: email,
            password: password,
        };
        if (props.type === "LogIn") {
            const url = "/users/login";

            axios
                .post(url, JSON.stringify(body), {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                .then((response) => {
                    console.log(response);
                    window.open(PATHS.home, "_self");
                })
                .catch((error) => {
                    console.log(error);
                    // TODO : Alert 추가
                });
        } else {
            const url = "/users/register";
            axios
                .post(url, JSON.stringify(body), {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                .then((response) => {
                    console.log(response);
                    window.open(PATHS.home, "_self");
                })
                .catch((error) => {
                    console.log(error);
                    // TODO : Alert 추가
                });
        }
    }
    return (
        <div className={style.container}>
            <div className={style.id_container}>
                <Input placeHolder={"ID"} onChanged={setEmail} />
            </div>
            <div className={style.pw_container}>
                <Input
                    placeHolder={"Password"}
                    type={"password"}
                    onChanged={setPassword}
                />
            </div>
            <div
                className={style.button}
                onClick={() => {
                    // TODO: 조건처리 필요
                    if (email && password) {
                        connect();
                    } else {
                        // TODO : Alert 추가
                    }
                }}
            >
                {props.type === "SignUp" ? "Sign Up" : "Next"}
            </div>
        </div>
    );
}
