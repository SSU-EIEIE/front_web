import { useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import style from "./Report.module.scss";

export default function Report() {
    const [place, setPlace] = useState("");
    const [address, setAddress] = useState("");
    const [script, setScript] = useState("");

    const [imageSrc, setImageSrc] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const encodeFileToBase64 = (fileBlob: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result as string);
                resolve();
            };
        });
    };

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

            <div className={style.photo_container}>
                <div className={style.label}>{"사진"}</div>
                <div
                    className={style.button}
                    onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current?.click();
                    }}
                >
                    {"사진 선택"}
                </div>
                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={(e) => {
                        if (e.target.files) {
                            encodeFileToBase64(e.target.files[0]);
                        }
                    }}
                />
                <div className={style.preview}>
                    {imageSrc && (
                        <img
                            className={style.img}
                            src={imageSrc}
                            alt="preview-img"
                        />
                    )}
                </div>
                <div
                    className={style.send_button}
                    onClick={() => {
                        alert(
                            "🚨 제보가 완료되었습니다. 🚨\n 안전한 경로를 위해 빠른 검토 후, 반영하겠습니다."
                        );
                    }}
                >
                    {"제보 전송"}
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
