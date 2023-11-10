import { useForm } from "react-hook-form";
import { useDetailpagemodaltype } from "src/stores/store";
import { useReportmutation } from "src/hooks/useReportreview";
import { placeinfoStyle } from "src/styles/style";

export const Reportmodal = () => {
    // board_review_number 가져오기
    const { board_review_Number } = useDetailpagemodaltype();   
    const { register, handleSubmit, formState: { isValid } } = useForm();
    const  reportMutation  = useReportmutation();

    const onSubmit = data => {
        reportMutation({board_review_Number, ...data});
    };

    return (
        <div>
            <div css={placeinfoStyle.modalStyle.reportStyle.title}>신고하기</div>
            <div css={placeinfoStyle.modalStyle.reportStyle.titleline}/>
            <div css={placeinfoStyle.modalStyle.reportStyle.subtitle}>
                허위신고일 경우, 신고자의 사용이 제한될 수 있으니 유의바랍니다.
            </ div>
            <div css={placeinfoStyle.modalStyle.reportStyle.subtitleline}/>
            <div css={placeinfoStyle.modalStyle.reportStyle.reportreason}>
                <div>신고사유</div>
                <form onSubmit={handleSubmit(onSubmit)} css={placeinfoStyle.modalStyle.reportStyle.form}>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                        type="radio"
                        id="report1"
                        value={1}
                        {...register("report_category")}
                        />
                        <label htmlFor="report1">주제와 상관 없는 리뷰</label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                            type="radio"
                            id="report2"
                            value={2}
                            {...register("report_category")}
                        />
                        <label htmlFor="report2">도배성 리뷰</label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                            type="radio"
                            id="report3"
                            value={3}
                            {...register("report_category")}
                        />
                        <label htmlFor="report3">불법 광고</label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                            type="radio"
                            id="report4"
                            value={4}
                            {...register("report_category")}
                        />
                        <label htmlFor="report4">
                            개인 정보 노출 및 사생활 침해
                        </label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                            type="radio"
                            id="report5"
                            value={5}
                            {...register("report_category")}
                        />
                        <label htmlFor="report5">
                            욕설 및 비속어, 인신 공격 리뷰
                        </label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.radioButton}>
                        <input
                            type="radio"
                            id="report6"
                            value={6}
                            {...register("report_category")}
                        />
                        <label htmlFor="report6">기타 (하단 신고 내용 입력)</label>
                    </div>
                    <div css={placeinfoStyle.modalStyle.reportStyle.reporttextarea}>
                        <label htmlFor="content">신고내용</label>
                        <textarea id="content" {...register("content")} placeholder="신고 내용을 입력해 주세요." />
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button type="button" css={placeinfoStyle.modalStyle.reportStyle.cancleButton}>닫기</button>
                        <button type="submit"  disabled={!isValid} css={placeinfoStyle.modalStyle.reportStyle.submitButton(isValid)}> 신고하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
