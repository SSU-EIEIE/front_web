import { useState } from "react";
import Input from "../Input/Input";
import style from "./SearchBar.module.scss";
export default function SearchBar() {
    const [address, setAddress] = useState("");
    return (
        <div className={style.container}>
            &nbsp;&nbsp;&nbsp;&nbsp;{"지도 검색"}
        </div>
    );
}
