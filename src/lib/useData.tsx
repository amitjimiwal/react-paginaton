import { useEffect, useState } from "react";
import { userInterface } from "../interface/userInterface";
const useData = (url: string) => {
  const [users, setusers] = useState<null | userInterface[]>(null);
  const [loading, setloading] = useState<boolean>(true);
  const [totalpages, settotalpages] = useState<number>(1);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((responsedata) => {
        const { total_pages, data } = responsedata;
        setusers(data);
        settotalpages(total_pages)
        setloading(false);
      });
  }, [url]);
  return { users, loading ,totalpages};
};

export default useData;
