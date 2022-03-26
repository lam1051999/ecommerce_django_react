import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function SampleProduct() {
  const [sample, setSample] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getSample() {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_ECOMMERCE_PROJECT_API}/product-samples/`
      );
      setSample(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getSample();
  }, []);

  return sample ? <Product sample={sample} isLoading={isLoading} /> : null;
}
