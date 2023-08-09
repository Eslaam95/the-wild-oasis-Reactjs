import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
export function useDeleteBooking() {
  const queryCleint = useQueryClient();
  const { isloading: deleteLoading, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryCleint.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteLoading, deleteBooking };
}
