/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1- load auth user
  const { user, isLoading, isAuth } = useUser();

  //3- if not auth go to /login
  useEffect(
    function () {
      if (!isLoading && !isAuth) {
        navigate("/login");
      }
    },
    [isLoading, isAuth, navigate]
  );

  //2- while loading show a spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }
  //4- if auth >> render

  if (isAuth) return children;
}
export default ProtectedRoute;
