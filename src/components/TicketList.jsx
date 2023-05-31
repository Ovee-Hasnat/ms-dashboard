import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Modal } from "react-responsive-modal";
import AddTicketForm from "./AddTicketForm";
import EditTicketForm from "./EditTicketForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteType } from "../redux/ticketRedux";

const TicketList = () => {
  const types = useSelector((state) => state.type.types);

  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [indexToRemove, setIndexToRemove] = useState(null);
  const [indexToUpdate, setIndexToUpdate] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onOpenModalSecond = (type) => {
    setOpenSecond(true);
    setIndexToUpdate(types.indexOf(type));
  };
  const onOpenModalThird = (type) => {
    setOpenThird(true);
    setIndexToRemove(types.indexOf(type));
  };

  const onCloseModal = () => setOpen(false);
  const onCloseModalSecond = () => setOpenSecond(false);
  const onCloseModalThird = () => setOpenThird(false);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteType(indexToRemove));
    onCloseModalThird();
  };

  return (
    <div className="bg-teal-100/70 h-[calc(100vh-64px)]">
      <div className="p-8 lg:w-[calc(100vw-224px)] lg:ml-auto">
        <div>
          <button
            className="py-2 px-5 bg-teal-800 text-white lg:text-lg font-semibold rounded-lg block ml-auto hover:-translate-y-1 transition-all duration-300"
            type="button"
            onClick={onOpenModal}
          >
            Add Ticket Type
          </button>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-3 text-center leading-10 shadow-xl divide-x divide-y">
            <div className="bg-teal-300 font-semibold">Ticket Type</div>
            <div className="bg-teal-300 font-semibold">Description</div>
            <div className="bg-teal-300 font-semibold">Action</div>

            {types.map((type, i) => (
              <Fragment key={i}>
                <div className="bg-white">{type.type}</div>
                <div className="bg-white">{type.description}</div>
                <div className="bg-white flex gap-2 justify-center items-center">
                  <PencilIcon
                    className="w-6 p-0.5 border rounded-md hover:border-cyan-800 cursor-pointer"
                    onClick={() => onOpenModalSecond(type)}
                  />
                  <TrashIcon
                    className="w-6 p-0.5 border rounded-md hover:border-cyan-800 cursor-pointer"
                    onClick={() => onOpenModalThird(type)}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        animationDuration={0}
        focusTrapped={false}
      >
        <div>
          <h2 className="text-lg text-teal-800 font-semibold">
            Add Ticket Type
          </h2>
        </div>
        <AddTicketForm close={onCloseModal} />
      </Modal>

      <Modal
        open={openSecond}
        onClose={onCloseModalSecond}
        center
        animationDuration={0}
        focusTrapped={false}
      >
        <div>
          <h2 className="text-lg text-teal-800 font-semibold">
            Edit Ticket Type
          </h2>
        </div>
        <EditTicketForm close={onCloseModalSecond} index={indexToUpdate}/>
      </Modal>

      <Modal
        open={openThird}
        onClose={onCloseModalThird}
        center
        animationDuration={0}
        focusTrapped={false}
      >
        <div className="w-80">
          <h2 className="text-lg text-teal-800 font-semibold">
            Are you sure to delete this?
          </h2>
        </div>
        <div className="flex gap-4 mt-6 text-white font-semibold">
          <button
            className="py-2 px-5 bg-red-700 rounded-lg"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="py-2 px-5 bg-emerald-700 rounded-lg"
            type="button"
            onClick={onCloseModalThird}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TicketList;
