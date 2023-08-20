import { Calendar } from "react-modern-calendar-datepicker";
// import { travleStyle } from "../../../styles/style";
import { useTravledate } from "../../../stores/store";

export const Plancalendar = () => {
    const { planDate, setPlandate } = useTravledate();

    return (
        <Calendar
            value={planDate}
            onChange={setPlandate}
            shouldHighlightWeekends
            minimumDate={{
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            }}
        />
    );
};
