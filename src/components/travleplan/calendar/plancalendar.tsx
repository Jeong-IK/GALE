import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useDateRangeStore } from "../../../stores/store";
import { travleStyle } from "../../../styles/style";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

export const Plancalendar = () => {
    const { range, setRange } = useDateRangeStore();

    return (
        <div css={travleStyle.calendar.containerStyle}>
        {/* <Calendar
            value={range}
            onChange={setRange}
            shouldHighlightWeekends
            month={currentMonth}
            year={currentYear}
        /> */}
        </div>
    );
};
