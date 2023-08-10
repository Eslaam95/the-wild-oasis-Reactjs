import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
// tW9dmsmYFfHgxHC4
const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media all and (max-width: 1039px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;
const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  overflow-x: hidden;
  @media all and (max-width: 1170px) and (min-width: 1040px) {
    padding: 4rem 1.8rem 6.4rem;
  }
  @media all and (max-width: 768px) {
    padding: 4rem 1.5rem 6.4rem;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <Main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
