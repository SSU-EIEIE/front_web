import { useState } from "react";
import Input from "../Input/Input";
import style from "./Search.module.scss";
export default function Search() {
    const [address, setAddress] = useState("");

    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <div className={style.search_bar}>
                    <Input placeHolder={"지도 검색"} onChanged={setAddress} />
                </div>
            </div>
            <div className={style.list_container}>
                <ChargerContainer />
                <div className={style.record_title}>{"최근검색"}</div>
                {/* 검색기록 리스트 */}
            </div>
        </div>
    );
}

function ChargerContainer() {
    return (
        <div className={style.charger_container}>
            <div className={style.icon} />
            <div className={style.text}>{"가까운 충전소 찾기"}</div>
            {/* TODO : 충전소 onClick 추가 */}
        </div>
    );
}
