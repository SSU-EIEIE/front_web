import Map from "../Home/Map";
import DetailSearchBar from "../SearchBar/DetailSearchBar";
import style from "./Detail.module.scss";

export default function Detail(props: any) {
    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <DetailSearchBar end={props.match.params.searchString} />
            </div>
            <Map />
        </div>
    );
}
