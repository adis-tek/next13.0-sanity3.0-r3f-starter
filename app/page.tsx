"use client";
// import dynamic from "next/dynamic";
import "./global.css";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import Canvas from "../components/layout/canvas";
import BoxComponent from "../components/canvas/BoxComponent";

import { getPosts } from "../sanity/sanity-utils";
import { videoId, provider } from "../utils/plyr-video";

// For deubgging, please use static import
// const Shader = dynamic(
//   () => import("@/components/canvas/ShaderExample/ShaderExample"),
//   {
//     ssr: false,
//   }
// );

// DOM elements here
const DOM = (props) => {
  const posts = props.props;
  return (
    <div>
      <h1>Index</h1>
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
      ))}
    </div>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return (
    <>
      <Canvas>
        <BoxComponent onClick={undefined} />
      </Canvas>
    </>
  );
};

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <DOM props={posts} />
      <R3F />
    </>
  );
}
