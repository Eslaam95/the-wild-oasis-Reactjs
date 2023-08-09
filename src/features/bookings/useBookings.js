import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get("status");
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const [field, direction] = sortByValue.split("-");
  const sortBy = { field, direction };
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, currentPage],
    queryFn: () => getBookings({ filter, sortBy, currentPage }),
  });

  /*pre fetch*/
  const pagescount = Math.ceil(count / PAGE_SIZE);
  if (currentPage < pagescount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage + 1],
      queryFn: () =>
        getBookings({ filter, sortBy, currentPage: currentPage + 1 }),
    });
  }
  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage - 1],
      queryFn: () =>
        getBookings({ filter, sortBy, currentPage: currentPage - 1 }),
    });
  }
  return { isLoading, bookings, error, count };
}
