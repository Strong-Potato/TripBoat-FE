export interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type LeaveTripModalProps = Omit<ModalProps, 'onOpen'>;

export interface DeletePlacesModalProps {
  isOpen: boolean;
  onClose: () => void;
  placeList: string[];
}
