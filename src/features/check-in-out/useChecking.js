import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useChecking() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkIn, isLoaading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(
        `Booking #${data.id} successfully checked in for ${data.guests.fullName}`
      );
      queryclient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("There was a problem checking in!"),
  });

  return { checkIn, isCheckingIn };
}
