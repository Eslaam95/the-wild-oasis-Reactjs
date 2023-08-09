import { useLogOut } from "./useLogOut";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
  const { logout, loggingOut } = useLogOut();
  return (
    <ButtonIcon onClick={logout} disabled={loggingOut}>
      {loggingOut ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
