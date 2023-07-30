import { useEffect } from "react";
import { mypageStyle } from "../../styles/style";
import { useMypagecontent } from "../../stores/store";
import { useGettravleMutation } from "../../hooks/useGettravlelist";
import { useDeletetravleMutation } from "../../hooks/useDeletetravlelist";

export const ContentList = () => {
    const { contentType } = useMypagecontent();
    const { travlelistMutation } = useGettravleMutation();
    const { deletetravlelistMutation } = useDeletetravleMutation();
    useEffect(() => {
        travlelistMutation();
    }, []);

    const Deletetravle = () => {
        deletetravlelistMutation({ planner_idx: 23 });
    };

    return (
        <div css={mypageStyle.contentList}>
            <div css={mypageStyle.listSubtitle}>{contentType}</div>
            <div>
                목록
                <button type="button" onClick={Deletetravle}>
                    삭제
                </button>
            </div>
        </div>
    );
};
