import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateType } from "../redux/ticketRedux";

// eslint-disable-next-line react/prop-types
const EditTicketForm = ({ close, index }) => {
  const typeToUpdate = useSelector((state) => state.type.types[index]);

  const [type, setType] = useState(typeToUpdate.type);
  const [description, setDescription] = useState(typeToUpdate.description);

  let updatedType = { type, description };

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateType({index, updatedType}));
    close();
  };

  return (
    <div className="mt-8 space-y-4 w-80">
      <div className="font-thin tracking-wide space-y-2">
        <form>
          <label>Ticket Type: </label>
          <input
            type="text"
            name="type"
            className="border p-1 rounded-md focus:outline-none w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </form>
        <div>
          <label>Description: </label>
          <textarea
            type="text"
            name="desc"
            className="border p-1 rounded-md focus:outline-none w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          className="py-2 px-5 bg-teal-800 text-white font-semibold rounded-lg block ml-auto hover:bg-teal-900"
          onClick={handleUpdate}
        >
          Update Type
        </button>
      </div>
    </div>
  );
};

export default EditTicketForm;
