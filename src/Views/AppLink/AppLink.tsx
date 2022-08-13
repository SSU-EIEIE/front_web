import style from "./AppLink.module.scss";
export default function AppLink() {
    return (
        <div className={style.container}>
            <div className={style.img_container}>
                <div className={style.text}>
                    {
                        "휠체어를 위한 안전한 길찾기부터\n가까운 전동휠체어 충전소 위치까지!"
                    }
                </div>
                <div className={style.button}>{"휠세이프 앱 설치"}</div>
                {/* TODO : onClick 추가 */}
            </div>
        </div>
    );
}
