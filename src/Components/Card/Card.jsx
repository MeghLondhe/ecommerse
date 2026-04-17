import { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";

const UserCard = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAddCartModal, setOpenAddCartModal] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenAddCartModal = () => {
    setOpenAddCartModal(true);
  };

  const onClose = () => {
    setOpenAddCartModal(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-3">
      {/* Avatar + Name */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>
        </div>

        {/* Three-dot menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <circle cx="10" cy="4" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="10" cy="16" r="1.5" />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden">
              <button
                onClick={(user) => {
                  handleOpenAddCartModal();
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Add to cart
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Favourite
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Details */}
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>✉️</span>
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{user.address.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <span>{user.company.name}</span>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Website link */}
      <a
        href={`https://${user.website}`}
        target="_blank"
        rel="noreferrer"
        className="text-indigo-500 hover:text-indigo-700 text-sm font-medium"
      >
        🌐 {user.website}
      </a>

      {openAddCartModal && (
        <div>
          <Modal onClose={onClose} />
        </div>
      )}
    </div>
  );
};
export default UserCard;
