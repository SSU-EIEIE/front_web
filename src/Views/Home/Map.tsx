import { FC, useEffect, useState } from "react";
import style from "./Map.module.scss";
import img from "../../Assets/Images/current_position.png";

const { kakao } = window;

const Map: FC = () => {
    function currentLocation() {
        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다

        let container = document.getElementById("map");
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude; // 위도
                var lon = position.coords.longitude; // 경도

                let options = {
                    center: new kakao.maps.LatLng(lat, lon),
                    level: 3,
                };

                let map = new kakao.maps.Map(container, options);

                let markerImg = img;
                let imageSize = new kakao.maps.Size(50, 50);
                // let imageOption = { offset: new kakao.maps.Point(27, 69) };
                let markerImage = new kakao.maps.MarkerImage(
                    markerImg,
                    imageSize
                    // imageOption
                );

                let markerPosition = new kakao.maps.LatLng(lat, lon);

                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });
                marker.setMap(map);
            });
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            let options = {
                center: new kakao.maps.LatLng(
                    37.4812845080678,
                    126.952713197762
                ),
                level: 3,
            };

            let map = new kakao.maps.Map(container, options);
        }
        return true;
    }

    useEffect(() => {
        currentLocation();
    }, []);

    return (
        <div className={style.container}>
            <div id="map" className={style.map_container} />
        </div>
    );
};

export default Map;
