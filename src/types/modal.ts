import {TransformedDataItem} from './route';

export interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type LeaveTripModalProps = Omit<ModalProps, 'onOpen'>;

export interface DeletePlacesModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  placeList: TransformedDataItem[];
}
