import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

import CloseIcon from "@/assets/close.svg?react";

import { TagItemProps } from "@/types/regionSearch";

const RegionTagItem = ({ label, onClose }: TagItemProps) => (
  <Tag variant="region">
    <TagLabel>{label}</TagLabel>
    <button onClick={onClose}>
      <TagCloseButton as={CloseIcon} />
    </button>
  </Tag>
);

export default RegionTagItem;
