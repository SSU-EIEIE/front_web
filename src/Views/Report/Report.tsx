import { useState } from "react";
import Input from "../Input/Input";
import style from "./Report.module.scss";

export default function Report() {
    const [place, setPlace] = useState("");
    const [address, setAddress] = useState("");
    const [script, setScript] = useState("");
    return (
        <div className={style.container}>
            <InputArea
                title={"위험한 장소 명"}
                placeHolder={"예시) 상도주민센터 앞 횡단보도"}
                getValue={setPlace}
            />
            <InputArea
                title={"주소"}
                placeHolder={"예시) 서울 동작구 상도로 53길 9"}
                getValue={setAddress}
            />
            <InputArea
                title={"상세 설명"}
                placeHolder={"예시) 횡단보도 공사 중"}
                getValue={setScript}
            />

            {/* TODO : 사진 업로드 추가 개발 */}
            <div className={style.photo_container}>
                <div className={style.label}>{"사진"}</div>
                <div className={style.button}>{"사진 선택"}</div>
                <div className={style.photo_component_container}>
                    <div className={style.not_photo_component}>
                        {"사진 업로드"}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputArea(props: {
    title: string;
    placeHolder: string;
    getValue: (value: string) => void;
}) {
    return (
        <div className={style.input_container}>
            <div className={style.input_label}>{props.title}</div>
            <div className={style.input_component_container}>
                <Input
                    placeHolder={props.placeHolder}
                    onChanged={props.getValue}
                />
            </div>
        </div>
    );
}
