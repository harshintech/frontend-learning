import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

//   async function fetchData(getUrl) {
//     try {
//       setLoading(true);
//       const response = await fetch(getUrl);
//       const data = await response.json();
//       if (data && data.products && data.products.length > 0) {
//         setData(data.products);
//         setLoading(false);
//       }
//     } catch (e) {
//       console.log(e);
//       setErrorMessage(e.message);
//     }
//   }

//   useEffect(() => {
//     fetchData(url);
//   }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div className="sc-container fixstyle">
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
          <p>This is Project No. 9</p>
        </div>
      </div>
      {/* <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div> */}
      <h2 className="ps-9">Project No.9</h2>
      <h2>You see on Top of the Web Page</h2>
      <h2>It's Scroll Indicator</h2>

    </div>
  );
}
