import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingapi } from "../../services/apiSettings";
export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingapi,
    onSuccess: () => {
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => {
      toast.error("couldn't update settings");
    },
  });
  return { updateSetting, isUpdating };
}
