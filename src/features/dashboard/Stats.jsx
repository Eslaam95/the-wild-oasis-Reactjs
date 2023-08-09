/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons//hi2";
function Stats({ bookings, confirmedStays, numDays, cabincount }) {
  const numBookings = bookings.length;
  const sales = formatCurrency(
    bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  );
  const checkings = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabincount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={sales}
      />
      <Stat
        title="check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkings}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
