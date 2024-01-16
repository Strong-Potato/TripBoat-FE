import {
  Button,
  FormControl,
  FormLabel,
  Icon,
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreatVoteTitleModal.module.scss";

import VoteIcon from "@/assets/voteIcons/ic_vote.svg?react";

const CreatVoteTitleModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputCount, setInputCount] = useState<number>(0);
  const navigate = useNavigate();

  const newClose = () => {
    setInputCount(0);
    onClose();
  };

  const createNewVote = () => {
    newClose();
    // navigate(`/vote/${data.id}`)
  };

  return (
    <div className={styles.container}>
      <Button variant="voteButton" onClick={onOpen}>
        <Icon as={VoteIcon} fontSize="2rem" mr="4px" />
        투표 만들기
      </Button>

      <Modal isOpen={isOpen} onClose={newClose}>
        <ModalOverlay />
        <ModalContent
          px="20px"
          py="40px"
          mx="24px"
          maxWidth="100%"
          borderRadius="16px"
          alignSelf="center"
          boxSizing="border-box"
        >
          <ModalHeader
            fontWeight="titleSmall"
            fontSize="titleSmall"
            textAlign="center"
            p="0"
            mb="32px"
          >
            투표 제목을 정해주세요
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody p="0">
            <FormControl justifyContent={"center"}>
              <Input
                onChange={(e) => setInputCount(e.target.value.length)}
                maxLength={15}
                borderColor="neutral.800"
                focusBorderColor="primary.300"
                variant="flushed"
                placeholder=" 숙소 정하자, 카페 정하자"
                fontSize="subTitle"
              />
              <FormLabel
                display="flex"
                justifyContent="flex-end"
                fontSize="captionMedium"
                fontWeight="captionMedium"
                mt="4px"
                mr="-1px"
              >
                {inputCount}/15자
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter p="0" mt="24px">
            <Button
              type="submit"
              onClick={createNewVote}
              variant="blueButton"
              w="100%"
              h="48px"
              isDisabled={inputCount === 0}
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
