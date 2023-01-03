import { useRef } from "react";
import { travlestyle } from "../../styles/style";

export const TravlePlan = () => {
    const inputDepature = useRef<HTMLInputElement>(null);
    const inputArrival = useRef<HTMLInputElement>(null);
    const inputDate = useRef<HTMLInputElement>(null);
    // const travlePlanAction = () => {
    // if()
    // };

    return (
        <div css={travlestyle.travlediv}>
            <span css={travlestyle.travlesubject}>어디로 떠나시나요? 🧳</span>
            <div css={travlestyle.travleform}>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        css={travlestyle.Inputtxt}
                                        placeholder="출발지"
                                        ref={inputDepature}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        css={travlestyle.Inputtxt}
                                        placeholder="도착지"
                                        ref={inputArrival}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        css={travlestyle.Inputtxt}
                                        placeholder="날짜입력"
                                        ref={inputDate}
                                        onFocus={() => {
                                            if (!inputDate.current) return;
                                            inputDate.current.type = "date";
                                        }}
                                    />
                                </td>
                                <td>
                                    <button type="submit">여행 계획하기</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};
