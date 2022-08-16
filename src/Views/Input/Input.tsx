import { useState } from "react";
import style from "./Input.module.scss";

export default function Input(props: {
    placeHolder: string;
    type?: string;
    onChanged: (value: string) => void;
}) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className={style.container}>
            <input
                className={style.input}
                type={props.type ? props.type : "search"}
                placeholder={props.placeHolder}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    props.onChanged(e.target.value);
                }}
            ></input>
            {inputValue ? (
                <div
                    className={style.button}
                    onClick={() => {
                        setInputValue("");
                        props.onChanged("");
                    }}
                />
            ) : (
                <div />
            )}
        </div>
    );
}
