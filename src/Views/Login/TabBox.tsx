import style from "./TabBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function TabBox(props: {
    titleLeft: string;
    titleRight: string;
    tabIndex: number;
    tabChanged: (index: number) => void;
}) {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div
                    className={cx(style.button, "left", {
                        selected: props.tabIndex === 0,
                    })}
                    onClick={() => {
                        props.tabChanged(0);
                    }}
                >
                    {props.titleLeft}
                    <div className={style.selectedline} />
                </div>

                <div
                    className={cx(style.button, "right", {
                        selected: props.tabIndex === 1,
                    })}
                    onClick={() => {
                        props.tabChanged(1);
                    }}
                >
                    {props.titleRight}
                    <div className={style.selectedline} />
                </div>

                <div className={style.bottomline} />
            </div>
        </div>
    );
}
