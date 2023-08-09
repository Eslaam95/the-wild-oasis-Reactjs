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
  overflow: scroll;
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
