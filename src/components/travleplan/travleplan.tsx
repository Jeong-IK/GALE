import { useRef } from "react";
import { useRouter } from "next/router";
import { travleStyle, customDatepickerStyle } from "src/styles/style";
import { useDaterangeStore, useRegionselectorstore } from "src/stores/store";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { DatePicker } from "./calendar/plancalendar";
import { Regionselector } from "./regionselector";

export const TravlePlan = () => {
    const router = useRouter();
    const regionref = useRef(null);
    const {startDate, endDate} = useDaterangeStore();
    const {isopen, selectedregion, selectedsubregion,  setIsopen} = useRegionselectorstore();


    const onSubmit = () => {
        router.push({ 
            pathname: "/searchplace",
        });
    };

    return (
        <>
        <div css={travleStyle.travleDiv}>
            <div css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</div>
            <div css={travleStyle.travleForm}>
                <div css={travleStyle.form.div }>
                    <div
                        ref={regionref} 
                        onClick={() => {setIsopen(!isopen);}} 
                        css={travleStyle.form.input(selectedregion)}
                    >
                        { selectedsubregion ? `${selectedregion} ${selectedsubregion}` : "지역을 선택해주세요."}
                    </div>
                        <AiTwotoneEnvironment  css={travleStyle.form.iputemoge}/>
                    </div>
                    <div css={[travleStyle.form.div, customDatepickerStyle]}>
                        <DatePicker/>
                    </div>
                    <button
                        type="button"
                        css={travleStyle.form.button}
                         disabled={regionref.current == null || startDate == null || endDate == null}
                        onClick={onSubmit}
                    >
                        여행 계획하기
                    </button>
            </div>
            <Regionselector/>
        </div>
        </>
    );
};
