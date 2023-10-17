import { useForm } from "react-hook-form";
import { useDetailpagemodaltype } from "src/stores/store";

export const Reportmodal = () => {
    // board_review_number 가져오기
    const { board_review_number } = useDetailpagemodaltype();   
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // cookie 내 저장된 email 값 가져오기 
        const user_id = localStorage.getItem('email');
        console.log(data, board_review_number, user_id);
    };

    return (
        <div>
            <div>신고하기</div>
            <div />
            <div>
                허위신고일 경우, 신고자의 사용이 제한될 수 있으니 유의바랍니다.
                <div />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="radio"
                        id="report1"
                        value={1}
                        {...register("choice")}
                    />
                    <label htmlFor="report1">주제와 상관 없는 리뷰</label>
                    <input
                        type="radio"
                        id="report2"
                        value={2}
                        {...register("choice")}
                    />
                    <label htmlFor="report2">도배성 리뷰</label>
                    <input
                        type="radio"
                        id="report2"
                        value={3}
                        {...register("choice")}
                    />
                    <label htmlFor="report2">불법 광고</label>
                    <input
                        type="radio"
                        id="report2"
                        value={4}
                        {...register("choice")}
                    />
                    <label htmlFor="report3">
                        개인 정보 노출 및 사생활 침해
                    </label>
                    <input
                        type="radio"
                        id="report4"
                        value={5}
                        {...register("choice")}
                    />
                    <label htmlFor="report4">
                        욕설 및 비속어, 인신 공격 리뷰
                    </label>
                    <input
                        type="radio"
                        id="report5"
                        value="기타 (하단 신고 내용 입력)"
                        {...register("choice")}
                    />
                    <label htmlFor="report5">기타 (하단 신고 내용 입력)</label>

                    <label htmlFor="신고내용">신고내용</label>
                    <textarea id="신고내용" {...register("message")} />
                    <button type="button">닫기</button>
                    <button type="submit"> 신고하기</button>
                </form>
            </div>
        </div>
    );
};
