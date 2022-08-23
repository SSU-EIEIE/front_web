import { useEffect, useState } from "react";
import useCurrentLocation from "../../Libs/useCurrentPostion";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.scss";
import Map from "./Map";

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <SearchBar />
            </div>
            <Map />
        </div>
    );
}
