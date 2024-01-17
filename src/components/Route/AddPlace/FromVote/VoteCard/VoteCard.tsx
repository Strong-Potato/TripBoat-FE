import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretDown as DownIcon } from "react-icons/ai";
import { AiFillCaretUp as UpIcon } from "react-icons/ai";

import styles from "./VoteCard.module.scss";

import PlaceList from "../PlaceList/PlaceList";

import { VoteCardProps } from "@/types/route";

function VoteCard({ id, title }: VoteCardProps) {
  // get/:id
  const candidates = [
    {
      id: 0,
      placeId: 0,
      placeName: "성심당",
      category: "카페",
      amIVoted: false,
    },
    {
      id: 1,
      placeId: 0,
      placeName: "성심당을 위협하는 핫한 베이커리 카페",
      category: "카페",
      amIVoted: false,
    },
  ];

  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const handlePlaceSelection = (placeName: string) => {
    if (selectedPlaces.includes(placeName)) {
      setSelectedPlaces((prevSelectedPlaces) =>
        prevSelectedPlaces.filter((place) => place !== placeName),
      );
    } else {
      setSelectedPlaces((prevSelectedPlaces) => [
        ...prevSelectedPlaces,
        placeName,
      ]);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Accordion allowToggle w="100%" border="none">
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <div
                className={
                  isExpanded ? styles.openedContainer : styles.closedContainer
                }
              >
                <AccordionButton
                  p="0"
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className={
                      isExpanded ? styles.openedItem : styles.closedItem
                    }
                  >
                    <div className={styles.titleContainer}>
                      <h1>{title}</h1>
                    </div>
                    <div className={styles.placesContainer}>
                      {selectedPlaces.length > 0 && (
                        <h2>{selectedPlaces.join(", ")}</h2>
                      )}
                    </div>
                    {isExpanded ? (
                      <UpIcon size="2.4rem" color="#3F444D" />
                    ) : (
                      <DownIcon size="2.4rem" color="#CDCFD0" />
                    )}
                  </div>
                </AccordionButton>
                <AccordionPanel
                  border="none"
                  display="flex"
                  flexDirection="column"
                  gap="0.2rem"
                  p="0 12px 16px 12px"
                >
                  {candidates.map((candidate) => (
                    <PlaceList
                      id={candidate.placeId}
                      name={candidate.placeName}
                      category={candidate.category}
                      onSelect={handlePlaceSelection}
                    />
                  ))}
                </AccordionPanel>
              </div>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default VoteCard;
