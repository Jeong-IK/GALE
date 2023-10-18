import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TravleplanProps } from "src/types/type";
import { travleStyle, customDatepickerStyle } from "src/styles/style";
import {AiTwotoneEnvironment} from "react-icons/ai";
import { DatePicker } from "./calendar/plancalendar";
import { Regionselector } from "./regionselector";

export const TravlePlan = () => {
    const router = useRouter();
    const {
        formState: { isSubmitting, isValid },
        handleSubmit,
    } = useForm<TravleplanProps>({ mode: "onChange" });

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
        <div css={travleStyle.travleDiv}>
            <div css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</div>
            <div css={travleStyle.travleForm}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div css={travleStyle.form.div}>
                        <Regionselector />
                        <AiTwotoneEnvironment />

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
        </div>
    );
};
