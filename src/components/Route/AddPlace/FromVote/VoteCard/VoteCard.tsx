import {Accordion, AccordionButton, AccordionItem, AccordionPanel} from '@chakra-ui/react';
import {useState} from 'react';
import {AiFillCaretDown as DownIcon} from 'react-icons/ai';
import {AiFillCaretUp as UpIcon} from 'react-icons/ai';
import {useSetRecoilState} from 'recoil';

import styles from './VoteCard.module.scss';

import {useGetVotesResults} from '@/hooks/Votes/vote';

import {selectedPlaceFromVoteState} from '@/recoil/spaces/selectPlace';

import PlaceList from '../PlaceList/PlaceList';

import {Candidate, VoteCardProps} from '@/types/route';

export interface SelectedPlaces {
  id: number;
  placeName: string;
}

function VoteCard({id, title}: VoteCardProps) {
  const {data} = useGetVotesResults(true, id);
  const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlaces[]>([]);
  const setSelectedPlacesFromVote = useSetRecoilState<SelectedPlaces[]>(selectedPlaceFromVoteState);

  const handlePlaceSelection = (placeName: string, placeId: number) => {
    const isSelected = selectedPlaces.some((place) => place.placeName === placeName);

    if (isSelected) {
      setSelectedPlaces((prevSelectedPlaces) => prevSelectedPlaces.filter((place) => place.placeName !== placeName));
      setSelectedPlacesFromVote((prevSelectedPlacesFromVote) =>
        prevSelectedPlacesFromVote.filter((place) => place.placeName !== placeName),
      );
    } else {
      const newSelectedPlace = {id: placeId, placeName};
      setSelectedPlaces((prevSelectedPlaces) => [...prevSelectedPlaces, newSelectedPlace]);
      setSelectedPlacesFromVote((prevSelectedPlacesFromVote) => [...prevSelectedPlacesFromVote, newSelectedPlace]);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Accordion allowToggle w='100%' border='none'>
          <AccordionItem key={data?.data?.id} border='none'>
            {({isExpanded}) => (
              <div className={isExpanded ? styles.openedContainer : styles.closedContainer}>
                <AccordionButton
                  p='0'
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <div className={isExpanded ? styles.openedItem : styles.closedItem}>
                    <div className={styles.titleContainer}>
                      <h1>{title}</h1>
                    </div>
                    <div className={styles.placesContainer}>
                      {selectedPlaces.length > 0 && (
                        <h2>{selectedPlaces.map((place) => place.placeName).join(', ')}</h2>
                      )}
                    </div>
                    {isExpanded ? <UpIcon size='2.4rem' color='#3F444D' /> : <DownIcon size='2.4rem' color='#CDCFD0' />}
                  </div>
                </AccordionButton>
                <AccordionPanel border='none' display='flex' flexDirection='column' gap='0.2rem' p='0 12px 16px 12px'>
                  {data && data?.data?.candidatesResponses?.length > 0 ? (
                    data.data.candidatesResponses.map((candidate: Candidate, index: number) => (
                      <PlaceList
                        key={candidate.placeInfo.placeId}
                        id={candidate.placeInfo.placeId}
                        name={candidate.placeInfo.placeName}
                        category={candidate.placeInfo.category}
                        areaCode={candidate.placeInfo.areaCode}
                        placeImageUrl={candidate.placeInfo.placeImageUrl}
                        rank={index}
                        onSelect={handlePlaceSelection}
                      />
                    ))
                  ) : (
                    <p>등록된 후보지가 없습니다</p>
                  )}
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
