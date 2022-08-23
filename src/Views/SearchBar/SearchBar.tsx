import { PATHS } from "../../App";
import style from "./SearchBar.module.scss";
export default function SearchBar() {
    return (
        <div
            className={style.container}
            onClick={() => {
                window.open(PATHS.search, "_self");
            }}
        >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"지도 검색"}
        </div>
    );
}
