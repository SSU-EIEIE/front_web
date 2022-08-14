import { useState } from "react";
import style from "./Login.module.scss";
import TabBox from "./TabBox";
import TabInput from "./TabInput";

export default function Login() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.top_container}>
                    <div className={style.title}>
                        <div className={style.icon} />
                        <div className={style.text}>{"WHEEL SAFE"}</div>
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <span className={style.light_text}>
                        {"By clicking sign up, you agree to our "}
                    </span>
                    <span className={style.bold_text}>
                        &nbsp;{"Terms and Conditions"}
                    </span>
                </div>
            </div>
            <div className={style.login_container}>
                <div className={style.tab_top}>
                    <TabBox
                        titleLeft="Sign Up"
                        titleRight="Log In"
                        tabIndex={tabIndex}
                        tabChanged={setTabIndex}
                    />
                </div>
                <div className={style.tab_bottom}>
                    {tabIndex === 0 ? (
                        <TabInput type="SignUp" />
                    ) : (
                        <TabInput type="LogIn" />
                    )}
                </div>
            </div>
        </div>
    );
}
