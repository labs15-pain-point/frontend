import { useState, useEffect } from "react";

import axios from "axios";

export default function useGet(url, respring) {
  const [data, setData] = useState([]);

  async function getResources() {
    try {
      const response = await axios.get(url);
      const thing = await response.data;
      setData(thing);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResources();
  }, [respring]);

  return data;
}