import style from "./DetailSearchBar.module.scss";

export default function DetailSearchBar(props: { start: string; end: string }) {
    return (
        <div className={style.container}>
            <div className={style.start_container}>
                <div className={style.text}>
                    {props.start ? props.start : "내 현재위치"}
                </div>
            </div>
            <div className={style.change_btn} />
            <div className={style.end_container}>
                <div className={style.text}>
                    {props.end.replaceAll('"', "")}
                </div>
            </div>
        </div>
    );
}
