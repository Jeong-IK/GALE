import 'react-dates/initialize';
import { useState } from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useDateRangeStore } from "../../../stores/store";
import { travleStyle } from "../../../styles/style";

export const Plancalendar = () => {
    const { range, setRange } = useDateRangeStore();
    const [startDate, setStartDate] = useState(moment(range.from));
    const [endDate, setEndDate] = useState(moment(range.to));
    const [focusedInput, setFocusedInput] = useState(null);
    const [initialMonth, setInitialMonth] = useState(moment());
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    
        if (startDate && endDate) {
          setRange({ from: startDate.toDate(), to: endDate.toDate() });
        }
      };
    
      const handleFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput);
      };
    return (
        <DateRangePicker
        startDate={startDate}
        startDateId="startDate"
        endDate={endDate}
        endDateId="endDate"
        initialVisibleMonth={() => initialMonth}
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
        numberOfMonths={2}
        isOutsideRange={() => false}
      />
    );
};
