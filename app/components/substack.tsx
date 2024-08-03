"use client"
import global from "../global"
import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "aurorasystems.substack.com",
      layout: "right",
      posts: 3,
      colors: {
        primary: "#00aeff",
        secondary: "#808080",
        background: "#FFFFFF",
      },
    };

    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;
