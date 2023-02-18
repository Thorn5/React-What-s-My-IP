import React from "react";
import { DateTime } from "luxon";

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

const DateInfo = () => {
  return (
    <div>
      <div>
        Date: {localDate.day}/{localDate.month}/{localDate.year}
      </div>
      <div>
        Your local time is: {localDate.hour}:{localDate.minute}
      </div>
      <div>
        Time in New York city is: {nyDate.hour}:{nyDate.minute}
      </div>
    </div>
  );
};

export default DateInfo;
