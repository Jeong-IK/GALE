import { format } from "date-fns";

export const MonthList = (currentMonth: Date) => (
    // const days = ["일", "월", "화", "수", "목", "금", "토"];

    <div>
        <span> {format(currentMonth, "M")} 월 </span>
        {/* {days.forEach(value => {
                <div key={value}>{value}</div>;
            })} */}
    </div>
);
