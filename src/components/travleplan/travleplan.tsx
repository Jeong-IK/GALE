import { useRef } from "react";
// import { useRouter } from "next/router";
import { AiOutlineSwap } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { DatePicker } from "./calendar/plancalendar";
import { useDaterangeStore } from "../../stores/store";
import { TravleplanProps } from "../../types/type";

import { travleStyle, customDatepickerStyle } from "../../styles/style";

export const TravlePlan = () => {
    const inputDepature = useRef<HTMLInputElement>(null);
    const inputArrival = useRef<HTMLInputElement>(null);
    const { startDate, endDate } = useDaterangeStore();
    // const router = useRouter();

    const {
        register,
        formState: { isSubmitting, isValid },
        handleSubmit,
    } = useForm<TravleplanProps>({ mode: "onChange" });

    const onSubmit = (inputDate: TravleplanProps) => {
        if (!inputDepature.current || !inputArrival.current) return;

        const { depature, arrival } = inputDate;
        const startDateStr = startDate?.toISOString();
        const endDateStr = endDate?.toISOString();
        console.log(depature, arrival, startDateStr, endDateStr);
        // router.push({
        //     pathname: "/searchplace",
        //     query: {
        //         depature,
        //         arrival,
        //         startDate: startDateStr,
        //         endDate: endDateStr,
        //     },
        // });
    };

    return (
        <div css={travleStyle.travleDiv}>
            <div css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</div>
            <div css={travleStyle.travleForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div css={travleStyle.form.div}>
                        <input
                            type="text"
                            css={travleStyle.form.input}
                            placeholder="출발지"
                            {...register("depature", {
                                required: {
                                    value: true,
                                    message: "출발지를 입력해주세요",
                                },
                            })}
                        />
                    </div>
                    <AiOutlineSwap />
                    <div css={travleStyle.form.div}>
                        <input
                            type="text"
                            css={travleStyle.form.input}
                            placeholder="도착지"
                            ref={inputArrival}
                        />
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
