import { useEffect } from "react";
import { mypageStyle } from "../../styles/style";
import { useMypagecontent } from "../../stores/store";
import { useGettravlearrayQuery } from "../../hooks/useGettravlelist";
import { useDeletetravleMutation } from "../../hooks/useDeletetravlelist";
import { Contentcard } from "./contentcard";

export const ContentList = () => {
    const { contentType } = useMypagecontent();
    const { deletetravlelistMutation } = useDeletetravleMutation();
    // const { travlelistData, refetch } = useGettravlearrayQuery();

    // useEffect(() => {
    //     refetch();
    //     console.log(travlelistData);
    // }, [contentType, refetch]);

    // 수정 필요
    const Deletetravle = () => {
        deletetravlelistMutation({ planner_idx: 23 });
    };

    return (
        <div css={mypageStyle.contentList}>
            <div css={mypageStyle.listSubtitle}>{contentType}</div>
            {/* { travlelistData && travlelistData?.data.content.length > 0 ? travlelistData.data.content.map( (props:GetTravlelisttype) => <Contentcard {...props} key={props.idx}/>) : <div>Loading...</div> } */}
            <Contentcard />
            <button type="button" onClick={Deletetravle}>
                삭제
            </button>
        </div>
    );
};
