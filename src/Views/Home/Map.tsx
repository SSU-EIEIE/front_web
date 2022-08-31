import { FC, useEffect, useState } from "react";
import style from "./Map.module.scss";
import startPin from "../../Assets/Images/current_position.png";
import endPin from "../../Assets/Images/ic_Pin.svg";

const { kakao } = window;

export default function Map(props: { latlng?: any[] }) {
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

                let markerImg = startPin;
                let imageSize = new kakao.maps.Size(50, 50);
                let markerImage = new kakao.maps.MarkerImage(
                    markerImg,
                    imageSize
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

    function rootView() {
        let container = document.getElementById("map");
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude; // 위도
            var lon = position.coords.longitude; // 경도

            let options = {
                center: new kakao.maps.LatLng(lat, lon),
                level: 3,
            };

            let map = new kakao.maps.Map(container, options);

            let bounds = new kakao.maps.LatLngBounds();

            let markerImg1 = startPin;
            let markerImg2 = endPin;
            let imageSize1 = new kakao.maps.Size(50, 50);
            let imageSize2 = new kakao.maps.Size(50, 50);
            let markerImage1 = new kakao.maps.MarkerImage(
                markerImg1,
                imageSize1
            );
            let markerImage2 = new kakao.maps.MarkerImage(
                markerImg2,
                imageSize2
            );

            let markerPosition1 = new kakao.maps.LatLng(lat, lon);

            let startMarker = new kakao.maps.Marker({
                position: markerPosition1,
                image: markerImage1,
            });
            startMarker.setMap(map);

            if (props.latlng) {
                var linePath: any = [];
                let latlngLength = props.latlng.length;
                for (let i = 0; i < latlngLength; i++) {
                    linePath.push(
                        new kakao.maps.LatLng(
                            props.latlng[i][1],
                            props.latlng[i][0]
                        )
                    );
                    bounds.extend(
                        new kakao.maps.LatLng(
                            props.latlng[i][1],
                            props.latlng[i][0]
                        )
                    );
                }
                var polyline = new kakao.maps.Polyline({
                    path: linePath, // 선을 구성하는 좌표배열 입니다
                    strokeWeight: 9, // 선의 두께 입니다
                    strokeColor: "#077DEE", // 선의 색깔입니다
                    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle: "solid", // 선의 스타일입니다
                });

                let markerPosition2 = new kakao.maps.LatLng(
                    props.latlng[latlngLength - 1][1],
                    props.latlng[latlngLength - 1][0]
                );

                let endMarker = new kakao.maps.Marker({
                    position: markerPosition2,
                    image: markerImage2,
                });
                endMarker.setMap(map);

                polyline.setMap(map);
                map.setBounds(bounds);
            }
        });
    }

    useEffect(() => {
        currentLocation();
    }, []);

    useEffect(() => {
        rootView();
    }, [props.latlng]);

    return (
        <div className={style.container}>
            <div id="map" className={style.map_container} />
        </div>
    );
}
