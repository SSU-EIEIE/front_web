import React, { useState } from "react";
import "./App.scss";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import ScrollToTop from "./Libs/ScrollToTop";
import Header from "./Views/Header/Header";
import Home from "./Views/Home/Home";
import AppLink from "./Views/AppLink/AppLink";
import Login from "./Views/Login/Login";
import Report from "./Views/Report/Report";

export const PATHS = {
    home: "/",
    link: "/link",
    search: "/search",
    detail: "/detail",
    report: "/report",
    setting: "/setting",
    login: "/login",
};

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    return (
        <Router>
            <ScrollToTop />
            <div className="app_container">
                {currentPath.includes("/link") ||
                currentPath.includes("/login") ? (
                    <div />
                ) : (
                    <Header />
                )}
                <div className="bg_container">
                    <Switch>
                        <Route
                            exact
                            path={PATHS.home}
                            render={(props: any) => {
                                setCurrentPath(PATHS.home);
                                return <Home {...props} />;
                            }}
                        />
                        <Route
                            exact
                            path={PATHS.link}
                            render={(props: any) => {
                                setCurrentPath(PATHS.link);
                                return <AppLink {...props} />;
                            }}
                        />
                        <Route
                            exact
                            path={PATHS.login}
                            render={(props: any) => {
                                setCurrentPath(PATHS.login);
                                return <Login {...props} />;
                            }}
                        />
                        <Route
                            exact
                            path={PATHS.report}
                            render={(props: any) => {
                                setCurrentPath(PATHS.report);
                                return <Report {...props} />;
                            }}
                        />
                        {/* <Route
                                exact
                                path={PATHS.search}
                                render={(props: any) => {
                                    setCurrentPath(PATHS.search);
                                    return <Search {...props} />;
                                }}
                            />
                             <Route
                                exact
                                path={PATHS.detail}
                                render={(props: any) => {
                                    setCurrentPath(PATHS.detail);
                                    return <DetailRoot {...props} />;
                                }}
                            /> */}

                        <Redirect from="/*" to={PATHS.home} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
