import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.scss";
export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <SearchBar />
            </div>
        </div>
    );
}
