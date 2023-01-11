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
            <span css={travleStyle.travleSubject}>어디로 떠나시나요? 🧳</span>
            <div css={travleStyle.travleForm}>
                <form>
                    <div>
                        <span>
                            <input
                                type="text"
                                css={travleStyle.inputTxt}
                                placeholder="출발지"
                                ref={inputDepature}
                            />
                        </span>
                        <AiOutlineSwap />
                        <span>
                            <input
                                type="text"
                                css={travleStyle.inputTxt}
                                placeholder="도착지"
                                ref={inputArrival}
                            />
                        </span>
                        <span>
                            <input
                                type="text"
                                css={travleStyle.inputTxt}
                                placeholder="날짜입력"
                                ref={inputDate}
                                onFocus={() => {
                                    if (!inputDate.current) return;
                                    inputDate.current.type = "date";
                                }}
                            />
                        </span>
                        <button type="submit">여행 계획하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
