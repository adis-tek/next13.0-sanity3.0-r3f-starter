export const videoId = (videoUrl: string) => {
  const regex = /\/([a-zA-Z0-9])+$/g;
  const id = videoUrl.match(regex) ?? "";
  return id.toString().slice(1);
};

export const provider = (videoUrl: string | Plyr.Provider) => {
  const url =
    videoUrl.match("youtube") || videoUrl.match("youtu.be")
      ? "youtube"
      : videoUrl.match("vimeo")
      ? "vimeo"
      : "html5";
  return url;
};
