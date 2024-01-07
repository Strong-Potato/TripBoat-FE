import BasicInformation from "./BasicInformation/BasicInformation";
import Others from "./Others/Others";
import ShortReviews from "./ShortReveiws/ShortReviews";

function Information() {
  return (
    <div>
      <BasicInformation />
      <ShortReviews />
      <Others />
    </div>
  );
}

export default Information;
