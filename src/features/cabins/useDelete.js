import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
export function useDelete() {
  const queryCleint = useQueryClient();
  const { isloading: deleteLoading, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryCleint.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteLoading, deleteCabin };
}
