import { useEffect, useState } from "react";

import spacesRequest from "@/api/Sidebar/getSpaces";

const useGetSpaces = (isSideOpen: boolean) => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      if (isSideOpen) {
        try {
          const data = await spacesRequest.getSpaces();
          setSpaces(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchSpaces();
  }, [isSideOpen]);

  return spaces;
};

export default useGetSpaces;
