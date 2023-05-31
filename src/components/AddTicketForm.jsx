import { useState } from "react";
import { useDispatch } from "react-redux";
import { addType } from "../redux/ticketRedux";

// eslint-disable-next-line react/prop-types
const AddTicketForm = ({ close }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleAddType = () => {
    if (type) {
      dispatch(addType({ type, description }));
      close();
    } else {
      setError(true);
    }
  };

  return (
    <div className="mt-8 space-y-4 w-80">
      <div className="font-thin tracking-wide space-y-2">
        <div>
          <label>
            <span className="text-red-700 font-semibold">*</span>Ticket Type:{" "}
          </label>

          <input
            type="text"
            className="border p-1 rounded-md focus:outline-none w-full"
            onKeyUp={(e) => setType(e.target.value)}
          />
          {error && <p className="text-sm text-red-700">Ticket type is required!</p>}
        </div>
        <div>
          <label>Description: </label>
          <textarea
            type="text"
            className="border p-1 rounded-md focus:outline-none w-full"
            onKeyUp={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          className="py-2 px-5 bg-teal-800 text-white font-semibold rounded-lg block ml-auto hover:bg-teal-900"
          onClick={handleAddType}
        >
          Add Type
        </button>
      </div>
    </div>
  );
};

export default AddTicketForm;
