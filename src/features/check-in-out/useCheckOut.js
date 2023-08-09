import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckOut() {
  const queryclient = useQueryClient();
  const { mutate: checkOut, isLoaading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(
        `Booking #${data.id} successfully checked out for ${data.guests.fullName}`
      );
      queryclient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was a problem checking out!"),
  });

  return { checkOut, isCheckingOut };
}
