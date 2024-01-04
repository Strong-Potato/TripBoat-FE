import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import styles from "./CreatVoteTitleModal.module.scss";

const CreatVoteTitleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputCount, setInputCount] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Button
        onClick={onOpen}
        mt="30px"
        w="11.25rem"
        h="3.125rem"
        borderRadius="50px"
        bg="#2388FF"
        color="#fff"
        colorScheme="blue"
      >
        투표 시작하기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent borderRadius="20px" alignSelf="center">
          <ModalHeader fontSize="1rem" mt="16px" textAlign="center">
            투표 제목을 정해주세요
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody px="10%">
            <FormControl>
              <Input
                onChange={(e) => setInputCount(e.target.value.length)}
                maxLength={15}
                borderColor="#23272F"
                focusBorderColor="#2388FF"
                variant="flushed"
                placeholder=" 숙소 정하자, 카페 정하자"
              />
              <FormLabel
                display="flex"
                justifyContent="flex-end"
                fontSize="0.75rem"
                mt="5px"
                mr="-1px"
              >
                {inputCount}/15자
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              onClick={onClose}
              mx="5%"
              mb="3%"
              w="100%"
              h="3.125rem"
              colorScheme="blue"
              isDisabled={inputCount === 0}
              _disabled={{
                bg: "#E3E5E5",
                color: "#979C9E",
                pointerEvents: "none",
              }}
              borderRadius="30px"
              bg="#2388FF"
              color="#fff"
            >
              완료
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatVoteTitleModal;
