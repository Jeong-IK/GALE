import { useRef } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { travleStyle } from "../../styles/style";

export const TravlePlan = () => {
    const inputDepature = useRef<HTMLInputElement>(null);
    const inputArrival = useRef<HTMLInputElement>(null);
    const inputDate = useRef<HTMLInputElement>(null);
    // const travlePlanAction = () => {
    // if()
    // };

    return (
        <div css={travleStyle.travleDiv}>
            <div css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</div>
            <div css={travleStyle.travleForm}>
                <form >
                    <div css={travleStyle.form.div}>
                            <input
                                type="text"
                                css={travleStyle.form.input}
                                placeholder="출발지"
                                ref={inputDepature}
                                
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
                        <div css={travleStyle.form.div}>
                            <input
                                type="text"
                                css={travleStyle.form.input}
                                placeholder="날짜입력"
                                ref={inputDate}
                                onFocus={() => {
                                    if (!inputDate.current) return;
                                    inputDate.current.type = "date";
                                }}
                            />
                        </div>
                        <button type="submit" css={travleStyle.form.button}>여행 계획하기</button>

                </form>
            </div>
        </div>

    );
};
