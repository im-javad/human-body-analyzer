import { useState } from "react";
import BodyPartPuzzle from "./bodyPartPuzzle";
import BodyPartModal from "./bodyPartModal";
import { BodyPartsProps } from "@/types/bodyPartsProps";

const BodyParts: React.FC<BodyPartsProps> = ({ parts }) => {
  const [selectedPartId, setSelectedPartId] = useState<number | null>(null);

  const handleSelectPartId = (id: number) => {
    setSelectedPartId(id);
  };

  const handleOnClose = () => {
    setSelectedPartId(null);
  };

  return (
    <section
      id="body-parts"
      className="h-screen flex justify-center items-center"
    >
      <div
        className={`parts relative w-[300px] h-[560px] ${
          selectedPartId && "blur-lg"
        }`}
      >
        {parts.map((part) => (
          <BodyPartPuzzle
            key={part.id}
            name={part.name}
            src={part.src}
            classList={part.classList}
            handleSelectClick={() => handleSelectPartId(part.id)}
          />
        ))}
        <BodyPartModal
          isOpen={!!selectedPartId}
          onClose={handleOnClose}
          part={parts.find((p) => p.id === selectedPartId)}
        />
      </div>
    </section>
  );
};

export default BodyParts;
