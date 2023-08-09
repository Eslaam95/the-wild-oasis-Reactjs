import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: logginIn } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
    },
    onError: (err) => {
      console.log("ERROR LOGGIN IN CUSTOM HOOK", err);
      toast.error("Email or Password is incorrect");
    },
  });

  return { login, logginIn };
}
