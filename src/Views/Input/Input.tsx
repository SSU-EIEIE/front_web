import { useState } from "react";
import style from "./Input.module.scss";

export default function Input(props: { placeHolder: string }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className={style.container}>
            <input
                className={style.input}
                type={"search"}
                placeholder={props.placeHolder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
            {inputValue ? (
                <div
                    className={style.button}
                    onClick={() => {
                        setInputValue("");
                    }}
                />
            ) : (
                <div />
            )}
        </div>
    );
}
