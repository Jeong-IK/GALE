import { format } from "date-fns";

export const MonthList = (currentDay: Date) => {
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    return (
        <>
            <div>{format(currentDay, "M")} 월</div>
            <div>
                {day.map(value => (
                    <div>{value}</div>
                ))}
            </div>
        </>
    );
};
