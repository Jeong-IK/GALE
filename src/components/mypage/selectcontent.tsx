import { mypageStyle } from "../../styles/style";
// import { useMypagecontent } from "../../stores/store";

export const SelectContenttype = () => (
    // const { contentType, setContenttpype } = useMypagecontent();

    <div>
        <div css={mypageStyle.selectContentDiv}>
            <button type="button" css={mypageStyle.contentTypeButton}>
                위시 리스트
            </button>
            <button type="button" css={mypageStyle.contentTypeButton}>
                여행 일정
            </button>
        </div>
        <div css={mypageStyle.mypageBorder} />
    </div>
);
