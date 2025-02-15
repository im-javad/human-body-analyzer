import { BodyPartPuzzleProps } from "@/types/bodyPartsProps";

const BodyPartPuzzle: React.FC<BodyPartPuzzleProps> = ({
  name,
  src,
  classList,
  handleSelectClick,
}) => {
  return (
    <div className={`part absolute cursor-pointer`} style={classList}>
      <img src={src} alt={name} loading="lazy" onClick={handleSelectClick} />
    </div>
  );
};

export default BodyPartPuzzle;
