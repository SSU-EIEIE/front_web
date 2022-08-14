import Input from "../Input/Input";
import style from "./Report.module.scss";

export default function Report() {
    return (
        <div className={style.container}>
            <InputArea
                title={"위험한 장소 명"}
                placeHolder={"예시) 상도주민센터 앞 횡단보도"}
            />
            <InputArea
                title={"주소"}
                placeHolder={"예시) 서울 동작구 상도로 53길 9"}
            />
            <InputArea
                title={"상세 설명"}
                placeHolder={"예시) 횡단보도 공사 중"}
            />
        </div>
    );
}

function InputArea(props: { title: string; placeHolder: string }) {
    return (
        <div className={style.input_container}>
            <div className={style.input_label}>{props.title}</div>
            <div className={style.input_component_container}>
                <Input placeHolder={props.placeHolder} />
            </div>
        </div>
    );
}
