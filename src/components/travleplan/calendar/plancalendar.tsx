// import 'react-dates/initialize';
// import { useState } from 'react';
// import moment from 'moment';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// import { useDateRangeStore } from "../../../stores/store";
// import { travleStyle } from "../../../styles/style";

// export const Plancalendar = () => {
//     const { range, setRange } = useDateRangeStore();
//     const [startDate, setStartDate] = useState(moment(range.from));
//     const [endDate, setEndDate] = useState(moment(range.to));
//     const [focusedInput, setFocusedInput] = useState(null);
//     const [initialMonth, setInitialMonth] = useState(moment());
//     const handleDatesChange = ({ startDate, endDate }) => {
//         setStartDate(startDate);
//         setEndDate(endDate);
    
//         if (startDate && endDate) {
//             document.querySelector('.DateRangePickerInput_arrow::after').style.display = 'inline'; // 화살표 보이기
//             setRange({ from: startDate.toDate(), to: endDate.toDate() });
//         }


//       };
    
//       const handleFocusChange = (focusedInput) => {
//         setFocusedInput(focusedInput);
//       };
      
//     return (
//         <DateRangePicker
//         startDate={startDate}
//         startDateId="startDate"
//         endDate={endDate}
//         endDateId="endDate"
//         initialVisibleMonth={() => initialMonth}
//         onDatesChange={handleDatesChange}
//         focusedInput={focusedInput}
//         onFocusChange={handleFocusChange}
//         numberOfMonths={2}
//         isOutsideRange={() => false}
//         monthFormat="YYYY년 MM월"
//         startDatePlaceholderText="날짜 선택"
//         endDatePlaceholderText=""
//         hideKeyboardShortcutsPanel
//         renderCalendarInfo={() =>
//         <div css={travleStyle.calendar.selectdateStyle}>
//             <div>가는날 : {range?.from}</div>

//             <div>오는날 : {range?.to}</div>
//         </div>}
//       />
//         );
// };

import React, { useState } from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { Calendar, DayValue } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { format } from 'date-fns';
import { useDateRangeStore } from '../../../stores/store';
import { DateRange } from "../../../types/type";

export const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const {range, setRange} = useDateRangeStore((state) => {state.range});
  
  const handleDateChange = ({from, to}: DateRange) => {
    setRange({from, to});
    setIsOpen(false);
  };

  const formatDate = (daterange?: DayValue): string =>
    {
    if (!daterange || !daterange.year || !daterange.month || !daterange.day) return '';
    
    const strFrom : string= format(range.from,'yyyy-MM-dd');
    const strTo : string= format(range.to,'yyyy-MM-dd');
    
    return `${strFrom} ~ ${strTo}`;
    };


 return (
   <div>
     <input 
       type="text" 
       readOnly 
       onClick={() => setIsOpen(!isOpen)} 
       value={formatDate(range)} 
     />
     
     {isOpen && (
        <Calendar 
          value={range}
          onChange={handleDateChange}
          colorPrimary="#FE8101" // selected day color in range 
          colorPrimaryLight="rgba(254,129,1,.4)" // not selected color in range 
          calendarClassName="custom-calendar"
        />
      )}
   </div>
 );
};
