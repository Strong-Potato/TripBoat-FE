import { useState, useRef } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const CreatVoteTitleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputCount, setInputCount] = useState<number>(0);

  return (
    <>
      <Button
        onClick={onOpen}
        mt="30px"
        w="180px"
        h="50px"
        borderRadius="50px"
        bg="#2388FF"
        color="#fff"
      >
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent borderRadius="20px" alignSelf="center">
          <ModalHeader fontSize="1rem" mt={"1rem"} textAlign={"center"}>
            투표 제목을 정해주세요
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody px="10%">
            <FormControl>
              <Input
                onChange={(e) => setInputCount(e.target.value.length)}
                maxLength={15}
                borderColor={"23272F"}
                focusBorderColor="blue.300"
                variant="flushed"
                placeholder=" 숙소 정하자, 카페 정하자"
              />
              <FormLabel
                display="flex"
                justifyContent="flex-end"
                fontSize="12px"
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
              h="50px"
              isDisabled={inputCount === 0}
              _disabled={{
                bg: "#E3E5E5",
                color: "#979C9E",
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
    </>
  );
};

export default CreatVoteTitleModal;
