import React, { useEffect, useState } from "react";

const ContributionSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const githubData = await fetch("");
      const response = await githubData.json();
      setData(response);
    })();
  }, []);
  return <div></div>;
};

export default ContributionSection;
