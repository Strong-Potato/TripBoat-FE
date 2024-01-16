import BasicInformation from "./BasicInformation/BasicInformation";
import Others from "./Others/Others";
import ShortReviews from "./ShortReveiws/ShortReviews";

import { ContentsInformationProps } from "@/types/detail";

function Information({ onOpen }: ContentsInformationProps) {
  return (
    <div>
      <BasicInformation />
      <ShortReviews onOpen={onOpen} />
      <Others />
    </div>
  );
}

export default Information;
