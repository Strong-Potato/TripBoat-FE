import { Button } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./RegionSearch.module.scss";

import NoSearchResult from "@/components/TripSpace/NoSearchResult/NoSearchResult";
import RegionList from "@/components/TripSpace/RegionList/RegionList";
import RegionSearchBox from "@/components/TripSpace/RegionSearchBox/RegionSearchBox";
import RegionTagItem from "@/components/TripSpace/RegionTagItem/RegionTagItem";
import SelectHeader from "@/components/TripSpace/SelectHeader/SelectHeader";

function RegionSearch() {
  const regions = [
    {
      name: "서울",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "부산",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "대전",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "감자밭",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "감자마을",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "포테토",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "감자도리",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "고구마가",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "되고 싶어",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
    {
      name: "꿈을 꾼다",
      imageUrl:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    },
  ];

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [regionValue, setRegionValue] = useState("");

  const handleInputChange = (newIsInputFocused: boolean) => {
    setIsInputFocused(newIsInputFocused);
  };

  const handleRegionValueChange = (newRegionValue: string) => {
    setRegionValue(newRegionValue);
  };

  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const handleRegionSelect = (regionName: string) => {
    if (selectedRegions.includes(regionName)) {
      setSelectedRegions((prevSelectedRegions) =>
        prevSelectedRegions.filter((name) => name !== regionName),
      );
    } else {
      if (selectedRegions.length < 4) {
        setSelectedRegions((prevSelectedRegions) => [
          ...prevSelectedRegions,
          regionName,
        ]);
      }
    }
  };

  return (
    <div className={styles.container}>
      <header
        className={
          isInputFocused || regionValue ? styles.focusHeader : styles.header
        }
      >
        {!(isInputFocused || regionValue) && (
          <SelectHeader title="어디로 떠나세요?" />
        )}
        <RegionSearchBox
          onInputChange={handleInputChange}
          onRegionValueChange={handleRegionValueChange}
        />
      </header>
      <div
        className={
          isInputFocused || regionValue
            ? styles.contentsContainer__focus
            : styles.contentsContainer
        }
      >
        {regions.length ? (
          <>
            {regions.map((region) => (
              <RegionList
                key={region.name}
                name={region.name}
                imageUrl={region.imageUrl}
                isSelected={selectedRegions.includes(region.name)}
                onSelect={handleRegionSelect}
              />
            ))}
          </>
        ) : (
          <NoSearchResult />
        )}
      </div>
      <div
        className={selectedRegions.length ? styles.regionChoiceContainer : ""}
      >
        <div className={styles.tagContainer}>
          {selectedRegions.map((region) => (
            <RegionTagItem
              key={region}
              label={region}
              onClose={() =>
                setSelectedRegions((prevSelectedRegions) =>
                  prevSelectedRegions.filter((name) => name !== region),
                )
              }
            />
          ))}
        </div>
        <Button
          isDisabled={!selectedRegions.length}
          zIndex="3"
          variant="CTAButton"
        >
          {selectedRegions.length
            ? `${selectedRegions.length}개 선택 완료`
            : "도시를 선택해주세요"}
        </Button>
      </div>
    </div>
  );
}

export default RegionSearch;
