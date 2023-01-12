import { useState } from "react";
import { MonthList } from "./monthlist";

export const Calendar = () => {
    const [currentDay, setCurrentDay] = useState(new Date());

    return (
        <div>
            <MonthList {...currentDay} />
        </div>
    );
};
