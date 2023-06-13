"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import { getPosts } from "../../sanity/sanity-utils";
import { videoId, provider } from "../../utils/plyr-video";

import { useQuery } from "@tanstack/react-query";

import { FetchPosts } from "../../store";

const PlyrVideo = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => FetchPosts(),
    staleTime: 1000 * 60,
    suspense: true,
  });
  const dataDisplayed = JSON.stringify(data, null, 2);
  return (
    <div>
      {dataDisplayed}
      {/* <h1>Index</h1>
      {console.log(posts.map((post) => post.title))}
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          {post.videoUrl ? (
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: videoId(post.videoUrl),
                    provider: provider(post.videoUrl),
                  },
                ],
              }}
              options={{
                controls: [
                  "play",
                  "progress",
                  "current-time",
                  "mute",
                  "volume",
                  "settings",
                ],
                settings: ["quality"],
                muted: true,
                volume: 0,
                autoplay: false,
              }}
            />
          ) : null}
        </div>
      ))} */}
    </div>
  );
};

export default PlyrVideo;
