import { DateRangePicker, ModifiersShape } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "moment/locale/ko";
import { useDaterangeStore } from "../../../stores/store";
import { travleStyle } from "../../../styles/style";

export const DatePicker = () => {
    const {
        focusedInput,
        setFocusedInput,
        draftStartDate,
        draftEndDate,
        setDate,
        setDraftDate,
    } = useDaterangeStore();

    const onDatesChange = ({
        startDate,
        endDate,
    }: {
        startDate: moment.Moment | null;
        endDate: moment.Moment | null;
    }) => {
        setDraftDate(startDate, endDate);
    };

    const onFocusChange = (
        focusedInputdate: "startDate" | "endDate" | null
    ) => {
        setFocusedInput(focusedInputdate);
    };

    const onSubmit = () => {
        setDate(draftStartDate, draftEndDate);
    };

    moment.locale("ko");

    const renderWeekHeaderElement = (day: string) => {
        const dayAsMoment = moment(day, "dd");

        // 일요일이면 빨간색 스타일을 적용합니다.
        if (dayAsMoment.day() === 0) {
            return (
                <span css={travleStyle.calendar.sundayStyle}>
                    {dayAsMoment.format("dd")}
                </span>
            );
        }

        // 그 외의 경우 기본 스타일을 적용합니다.
        return dayAsMoment.format("dd");
    };

    const renderDayContents = (
        date: moment.Moment,
        modifiers: ModifiersShape
    ) => {
        if (modifiers && modifiers.has("end-of-range")) {
            return (
                <>
                    {date.format("D")}
                    <button type="button" onClick={onSubmit}>
                        Submit
                    </button>
                </>
            );
        }

        return date.format("D");
    };

    return (
        <DateRangePicker
            startDate={draftStartDate}
            startDateId="start_date_id"
            endDate={draftEndDate}
            endDateId="end_date_id"
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            renderDayContents={renderDayContents}
            monthFormat="YYYY년 MM월"
            startDatePlaceholderText="날짜 선택"
            endDatePlaceholderText=""
            hideKeyboardShortcutsPanel
            renderWeekHeaderElement={renderWeekHeaderElement}
        />
    );
};
