import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

import styles from "./RegistrationModal.module.scss";

// 공백 제외 1글자 조건문 추가
interface RegistrationMoalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationMoalProps) => {
  const [voteName, setVoteName] = useState<string>("");

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 15) {
      setVoteName(inputValue);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2.5xl">
      <ModalOverlay maxWidth="45rem" left="50%" transform="translateX(-50%)" />
      <ModalContent
        px="24px"
        py="40px"
        borderRadius="16px"
        alignSelf="center"
        boxSizing="border-box"
      >
        <ModalCloseButton />

        <ModalBody p="0">
          <p className={styles.title}>투표 제목을 정해주세요</p>

          <FormControl justifyContent={"center"}>
            <Input
              onChange={(e) => handleSetValue(e)}
              value={voteName}
              borderColor="neutral.800"
              focusBorderColor="primary.300"
              variant="flushed"
              placeholder=" 숙소 정하자, 카페 정하자"
              fontSize="subTitle"
              mt="32px"
            />
            <FormLabel
              display="flex"
              justifyContent="flex-end"
              fontSize="captionMedium"
              fontWeight="captionMedium"
              mt="4px"
              mr="-1px"
            >
              {voteName.length}/15자
            </FormLabel>
          </FormControl>
          <Button
            type="submit"
            onClick={() => {}}
            variant="blueButton"
            w="100%"
            h="48px"
            mt="24px"
            isDisabled={voteName.length === 0}
          >
            완료
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationModal;
