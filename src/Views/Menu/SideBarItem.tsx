import style from "./SideBarItem.module.scss";

export default function SideBarItem(props: { name: string }) {
    return (
        <div className={style.container}>
            <div className={style.text}>{props.name}</div>
        </div>
    );
}
