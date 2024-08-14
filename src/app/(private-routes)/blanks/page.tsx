"use client";
import { fetchBlanksAction } from "@/app/api/blanks/fetchBlanks.action";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import { BlankDto } from "@/entities/Blank";

const BlanksPage = () => {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<BlankDto[]>([]);

  useEffect(() => {
    if (!isLoaded) {
      setLoading(true);
      fetchBlanksAction()
        .then((data) => {
          setData(data);
        })
        .finally(() => {
          setIsLoaded(true);
          setLoading(false);
        });
    }
  }, [isLoaded]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default BlanksPage;
