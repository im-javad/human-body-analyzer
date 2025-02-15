import { BodyPartsType } from "./bodyPartsTypes";

export interface BodyPartsProps {
  parts: BodyPartsType[];
}

export interface BodyPartPuzzleProps {
  name: string;
  src: string;
  classList: {};
  handleSelectClick: () => void;
}

export interface BodyPartModalProps {
  isOpen: boolean;
  onClose: () => void;
  part: BodyPartsType | undefined;
}
