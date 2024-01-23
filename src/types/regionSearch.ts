export interface RegionListProps {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: (regionName: string) => void;
}

export interface FormData {
  region: string;
}

export interface Region {
  name: string;
  imageUrl: string;
}

export interface RegionSearchInputProps {
  regions: Region[];
  onInputChange: (newIsInputFocused: boolean) => void;
  onRegionValueChange: (regionValue: string) => void;
  onRegionsFiltered: (filteredRegions: Region[]) => void;
}

export interface TagItemProps {
  label: string;
  onClose: () => void;
}
