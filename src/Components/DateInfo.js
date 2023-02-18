import React from "react";
import { DateTime } from "luxon";

const DateInfo = () => {
  console.log(DateTime.now(), "test time");
  const localDate = DateTime.local({
    year: 2017,
    month: 5,
    day: 15,
    hour: 17,
    minute: 36,
  });
  console.log(DateTime.local({ zone: "America/New_York" }), "test 2");
  const nyDate = DateTime.local({
    zone: "America/New_York",
    year: 2017,
    month: 5,
    day: 15,
    hour: 17,
    minute: 36,
  });

  return (
    <div>
      <div>
        Date: {localDate.day}/{localDate.month}/{localDate.year}
      </div>
      <div>
        Your local time is: {localDate.hour}:
        {String(localDate.minute).padStart(2, "0")}
      </div>
      <div>
        Time in New York city is: {nyDate.hour}:
        {String(nyDate.minute).padStart(2, "0")}
      </div>
    </div>
  );
};

export default DateInfo;
