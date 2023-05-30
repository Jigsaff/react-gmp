const ContextMenu = ({ show, onClose, onEdit, onDelete }) => {
  const handleEdit = e => {
    onEdit();
    onClose(e);
  };

  const handleDelete = e => {
    onDelete();
    onClose(e);
  };

  return (
      show && (
          <div
              className="absolute bg-gray-800 rounded-md shadow-md overflow-hidden">
            <button
                className="block w-full px-6 py-3 cursor-pointer text-left bg-gray-800 text-white text-base leading-6 hover:bg-gray-700"
                onClick={handleEdit}
            >
              Edit
            </button>
            <button
                className="block w-full px-6 py-3 cursor-pointer text-left bg-gray-800 text-white text-base leading-6 hover:bg-gray-700"
                onClick={handleDelete}
            >
              Delete
            </button>
          </div>
      )
  );
};

export default ContextMenu;