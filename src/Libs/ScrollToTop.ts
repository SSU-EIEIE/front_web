import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props: { history: any }) {
    useEffect(() => {
        const unlisten = props.history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [props.history]);

    return null;
}

export default withRouter(ScrollToTop);
