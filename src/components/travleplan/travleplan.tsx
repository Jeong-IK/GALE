import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TravleplanProps } from "src/types/type";
import { travleStyle, customDatepickerStyle } from "src/styles/style";
import { useRegionselectorstore } from "src/stores/store";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { DatePicker } from "./calendar/plancalendar";
import { Regionselector } from "./regionselector";

export const TravlePlan = () => {
    const router = useRouter();
    const {
        formState: { isSubmitting, isValid },
        handleSubmit,
    } = useForm<TravleplanProps>({ mode: "onChange" });
    const {isopen, selectedregion, selectedsubregion,  setIsopen} = useRegionselectorstore();


    const onSubmit = (inputDate: TravleplanProps) => {
        const { depature, arrival } = inputDate;
        router.push({
            pathname: "/searchplace",
            query: {
                depature,
                arrival,
            },
        });
    };

    return (
        <>
        <div css={travleStyle.travleDiv}>
            <div css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</div>
            <div css={travleStyle.travleForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div css={travleStyle.form.div }>
                    <div 
                        onClick={() => {setIsopen(!isopen);}} 
                        css={travleStyle.form.input(selectedregion)}
                    >
                        { selectedsubregion ? `${selectedregion} ${selectedsubregion}` : "지역을 선택해주세요."}
                    </div>
                        <AiTwotoneEnvironment  css={travleStyle.form.iputemoge}/>
                    </div>
                    <div css={[travleStyle.form.div, customDatepickerStyle]}>
                        <DatePicker />
                    </div>
                    <button
                        type="submit"
                        css={travleStyle.form.button}
                        disabled={isSubmitting || !isValid}
                    >
                        여행 계획하기
                    </button>
                </form>
            </div>
            <Regionselector/>
        </div>
        </>
    );
};
