import style from "./SearchBar.module.scss";
export default function SearchBar() {
    return (
        <div className={style.container}>
            <input
                className={style.input}
                type={"text"}
                placeholder={"지도 검색"}
            ></input>
        </div>
    );
}
