import { useState, useEffect } from "react";

export default function TodoDate() {
  const [dateTime, setDateTime] = useState("");

  //ToDO Date And Time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>{dateTime}</p>
    </>
  );
}
