import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const VideoList = ({ onVideoClick, id }) => {
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video data from API using Axios
    axios.get(`http://localhost:8080/api/lecture/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then((response) => {
        let resObj = []
        resObj.push(response.data)
        for(let i = 0; i < resObj.length; i++) {
          let url = resObj[i]["lectureVideoLink"] // Update the videos state with the retrieved data      
          const startIndex = url.indexOf("v=") + 2; // Adding 2 to skip "v="
          const endIndex = url.indexOf("&", startIndex); // Find the first occurrence of "&" after "v="

          const videoId = url.substring(startIndex, endIndex);
          resObj[i]["embedId"]   = videoId
        }

        setVideos(resObj);

      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);


  const handleClick = (embedId) => {
    onVideoClick(embedId); // Call the onVideoClick handler with the selected embedId
  };

  return (
    <div className="video-list">
      <h1>Video List</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => handleClick(video)}>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <h3>{index + 1}. {video.lectureName}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;