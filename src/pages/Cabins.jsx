import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import CreatCabinModal from "../features/cabins/CreatCabinModal";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log("Got cabins", data));
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <CreatCabinModal />
      </Row>
    </>
  );
}

export default Cabins;
