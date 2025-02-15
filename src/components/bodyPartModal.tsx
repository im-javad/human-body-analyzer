import { BodyPartModalProps } from "@/types/bodyPartsProps";
import Link from "next/link";
import { createPortal } from "react-dom";

const BodyPartModal: React.FC<BodyPartModalProps> = ({
  isOpen,
  onClose,
  part,
}) => {
  if (!isOpen || !part) return null;

  return createPortal(
    <div className="modal-area center-page bg-neutral-900 w-[85%] lg:w-[60%] rounded-lg px-6 pt-8 pb-16">
      <div className="close-area mb-12">
        <button
          className="absolute top-4 right-3 shadow shadow-red-600 rounded-3xl"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="details-area">
        <div className="name mb-1">
          <strong>Name: </strong>
          <span>{part.name}</span>
        </div>
        <div className="des mb-6 text-slate-200">
          <strong>Description: </strong>
          <span>{part.des}</span>
        </div>
        <div className="link text-cyan-400">
          <strong>Learn More: </strong>
          <Link href={part.more} target="_blank">
            Search On Google
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BodyPartModal;
