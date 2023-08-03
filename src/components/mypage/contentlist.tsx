import { useEffect } from "react";
import { mypageStyle } from "../../styles/style";
import { useMypagecontent } from "../../stores/store";
import { useGettravleQuery } from "../../hooks/useGettravlelist";
import { useDeletetravleMutation } from "../../hooks/useDeletetravlelist";
import { Contentcard } from "./contentcard";
import { GetTravlelisttype } from "../../types/type";


export const ContentList = () => {
    const { contentType } = useMypagecontent();
    const { deletetravlelistMutation } = useDeletetravleMutation();
    const {travlelistData, refetch} = useGettravleQuery();

    useEffect(() => {
        refetch();
    }, [contentType, refetch]);

    // 수정 필요
    const Deletetravle = () => {
        deletetravlelistMutation({ planner_idx: 23 });
    };

    return (
        <div css={mypageStyle.contentList}>
            <div css={mypageStyle.listSubtitle}>{contentType}</div>
            <div>
                 { travlelistData && travlelistData?.data.length > 0 ? travlelistData.data.map( (props:GetTravlelisttype) => <Contentcard props={props} key={props.idx} />) : <div>Loading...</div> }
                <button type="button" onClick={Deletetravle}>
                    삭제
                </button>
            </div>
        </div>
    );
};
