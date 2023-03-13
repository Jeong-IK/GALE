import { useErrorMsg } from "../../stores/store";

export const ErrorMsg = () => {
    const { errorMsgType } = useErrorMsg();

    return <div>{errorMsgType && <div> {errorMsgType} </div>}</div>;
};
