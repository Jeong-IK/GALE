import { useForm } from "react-hook-form";
import { useDetailpagemodaltype } from "src/stores/store";
import { useReportmutation } from "src/hooks/useReportreview";

export const Reportmodal = () => {
    // board_review_number 가져오기
    const { board_review_Number } = useDetailpagemodaltype();   
    const { register, handleSubmit } = useForm();
    const  reportMutation  = useReportmutation();

    const onSubmit = data => {
        reportMutation({board_review_Number, ...data});
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
                        {...register("report_category")}
                    />
                    <label htmlFor="report1">주제와 상관 없는 리뷰</label>
                    <input
                        type="radio"
                        id="report2"
                        value={2}
                        {...register("report_category")}
                    />
                    <label htmlFor="report2">도배성 리뷰</label>
                    <input
                        type="radio"
                        id="report3"
                        value={3}
                        {...register("report_category")}
                    />
                    <label htmlFor="report3">불법 광고</label>
                    <input
                        type="radio"
                        id="report4"
                        value={4}
                        {...register("report_category")}
                    />
                    <label htmlFor="report4">
                        개인 정보 노출 및 사생활 침해
                    </label>
                    <input
                        type="radio"
                        id="report5"
                        value={5}
                        {...register("report_category")}
                    />
                    <label htmlFor="report5">
                        욕설 및 비속어, 인신 공격 리뷰
                    </label>
                    <input
                        type="radio"
                        id="report6"
                        value={6}
                        {...register("report_category")}
                    />
                    <label htmlFor="report6">기타 (하단 신고 내용 입력)</label>

                    <label htmlFor="content">신고내용</label>
                    <textarea id="content" {...register("content")} />
                    <button type="button">닫기</button>
                    <button type="submit"> 신고하기</button>
                </form>
            </div>
        </div>
    );
};
