import {useEffect} from "react"

export const getTweet = () => {
  let isLoad = false;
  useEffect(() => {
    if (!isLoad) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoad = true;
    }
  }, []);
  return (
    <a 
    className="twitter-timeline" 
    data-width="550" data-height="630" 
    data-theme="light" 
    href="https://twitter.com/nanaseseman?ref_src=twsrc%5Etfw">
    Tweets by Simon</a>
  );
};