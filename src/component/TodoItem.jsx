import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, text, completed, handleChange, onDelete }) => {
  return (
    <div className="w-3/4 flex ml-2 px-1 py-2 mb-2 justify-between border border-gray-200 shadow-sm rounded-md">
      <div className={"" + (completed ? "line-through italic" : "null")}>
        <p className="break-all">{text}</p>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChange(id)}
          />
        </div>

        <div>
          <button
            className="w-4 h-4 text-red-500 hadow-sm ml-1 focus:outline-none"
            onClick={() => onDelete(id)}
          >
            {" "}
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
