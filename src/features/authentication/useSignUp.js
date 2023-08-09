import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log("signed up", user);
      toast.success(
        "Successfully created a new user! Please, confirm from user's email"
      );
    },
  });

  return { signup, isLoading };
}
