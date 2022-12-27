import { useRef } from "react";
import { Travleform } from "../style";

export const Travleplan = () => {
    const inputDepature = useRef<HTMLInputElement>(null);
    const inputArrival = useRef<HTMLInputElement>(null);
    const inputDate = useRef<HTMLInputElement>(null);
    // const travlePlanAction = () => {
    // if()
    // };

    return (
        <div css={Travleform}>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder="출발지"
                                    ref={inputDepature}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="도착지"
                                    ref={inputArrival}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="여행기간"
                                    ref={inputDate}
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
    );
};
