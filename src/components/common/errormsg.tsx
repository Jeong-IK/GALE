import { useEffect, useState } from "react";

export const useErrorMsg = (data: string) => {
    const [errorStatus, setErrorStatus] = useState<boolean>(true);

    useEffect(() => {
        const closeTimer = setTimeout(() => setErrorStatus(false), 3000);
        return clearTimeout(closeTimer);
    }, []);
    return errorStatus && <div> {data} </div>;
};
