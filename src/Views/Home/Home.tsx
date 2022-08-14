import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.scss";
export default function Home() {
    function initTmap() {}
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
        function initTmap() {
            var map = new Tmapv2.Map("TMap", {
                center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
                zoom:15
            });
        }

        initTmap();
        `;

        script.type = "text/javascript";
        document.head.appendChild(script);
    }, []);
    return (
        <div className={style.container}>
            <div className={style.search_container}>
                <SearchBar />
            </div>
            <div id="TMap" className={style.map_container}></div>
        </div>
    );
}
