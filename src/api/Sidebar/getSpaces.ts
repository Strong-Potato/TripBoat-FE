import axios from "axios";

const spacesRequest = {
  getSpaces: () =>
    axios.get(`http://api.TripVote/spaces`).then((response) => response.data),
};

export default spacesRequest;
