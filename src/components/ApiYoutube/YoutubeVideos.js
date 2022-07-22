import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";
function YoutubeVideos() {
  const [YouTubeVideos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAttFk4h3Kr5GTNNk-7rqBPvuk_Z_Cv_5M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        const YouTubeVideos = data.items;
        setVideo(YouTubeVideos);
      });
  }, []);
  console.log(YouTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Watch The Latest Videos Here From Apple
            </div>
          </div>

          {YouTubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default YoutubeVideos;
