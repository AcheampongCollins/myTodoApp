const TodoForms = ({ setInputText, inputText, handleSubmit }) => {
  return (
    <form className="text-center mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Todo"
        className="w-2/3 border-2 border-gray-300 outline-none p-3 rounded-lg shadow-md focus:border-purple-600"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="outline-none p-3 rounded-lg shadow-sm ml-2 border-2 border-gray-300  focus:outline-none
            hover:bg-indigo-900 hover:text-white transition duration-300 ease-linear"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForms;
