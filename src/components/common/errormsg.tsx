import { useEffect } from "react";
import { useErrorMsg } from "../../stores/store";

export const ErrorMsg = () => {
    const { errorMsgType, setErrorMsgType } = useErrorMsg();

    useEffect(() => {
        console.log("타이머");
        const closeTimer = setTimeout(() => {
            setErrorMsgType("");
        }, 3000);
        console.log(closeTimer);
        return () => {
            clearTimeout(closeTimer);
        };
    }, [errorMsgType, setErrorMsgType]);

    return <div>{errorMsgType && <div> {errorMsgType} </div>}</div>;
};
