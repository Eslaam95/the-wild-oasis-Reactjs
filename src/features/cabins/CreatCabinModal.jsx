import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
function CreatCabinModal() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

// function CreatCabinModal() {
//   const [isOpenModal, setIsOPenModal] = useState(false);
//   function onclose() {
//     setIsOPenModal(!isOpenModal);
//   }
//   return (
//     <div>
//       <Button
//         onClick={() => {
//           setIsOPenModal((showForm) => !showForm);
//         }}
//       >
//         Add a new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={onclose}>
//           <CreateCabinForm onCloseModal={onclose} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default CreatCabinModal;
