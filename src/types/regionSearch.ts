export interface RegionListProps {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: (regionName: string) => void;
}

export interface FormData {
  region: string;
}

export interface RegionSearchInputProps {
  onInputChange: (newIsInputFocused: boolean) => void;
  onSearchCompletionChange: (newIsSearchCompleted: boolean) => void;
}

export interface TagItemProps {
  label: string;
  onClose: () => void;
}
