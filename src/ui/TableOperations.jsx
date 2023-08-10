import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media all and (max-width: 1039px) {
    flex-direction: column;
    gap: 2.6rem;
    margin-top: 20px;
  }
`;

export default TableOperations;
