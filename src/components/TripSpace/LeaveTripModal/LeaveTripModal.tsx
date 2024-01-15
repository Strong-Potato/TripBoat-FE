import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

import { LeaveTripModalProps } from "@/types/modal";

function LeaveTripModal({ isOpen, onClose }: LeaveTripModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalContent
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1.2rem"
        borderRadius="16px"
        bg="neutral.0"
        p="32px"
      >
        <ModalHeader
          fontSize="subTitle"
          fontWeight="subTitle"
          lineHeight="subTitle"
          color="neutral.900"
          p="0"
        >
          여행을 나가시겠어요?
        </ModalHeader>
        <ModalBody
          fontSize="tabLabel"
          fontWeight="tabLabel"
          lineHeight="tabLabel"
          color="neutral.400"
          p="0"
        >
          <p>동행의 초대없이 다시 참여가 불가능합니다</p>
        </ModalBody>
        <ModalFooter display="flex" gap="8rem" p="0" mt="1.2rem">
          <Button
            variant="none"
            fontSize="button"
            fontWeight="button"
            lineHeight="button"
            color="neutral.400"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            variant="none"
            fontSize="button"
            fontWeight="button"
            lineHeight="button"
            color="primary.400"
          >
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LeaveTripModal;
