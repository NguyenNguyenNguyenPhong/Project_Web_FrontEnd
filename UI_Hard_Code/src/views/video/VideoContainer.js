import React, { useState } from 'react';
import Video from './VideoDisplayer';
import VideoList from './VideoList';
import './style.css';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';


const VideoContainer = () => {
  const { id } = useParams();
  const [embedId, setEmbedId] = useState(null); // Initial embedId state
  const [name, setName] = useState(null); 
  const [description, setDescription] = useState(null); 

  const handleVideoClick = (video) => {
    setEmbedId(video.embedId); // Update the embedId state when a video is clicked
    setName(video.lectureName);
    setDescription(video.description)
  };

  return (
    <div>
      <Navigation />
      <Video embedId={embedId || "qyFnMtMM7Qk"} />
      <h1 style={{padding: "10px"}}>{name}</h1>
      <h3 style={{padding: "10px"}}>Mô tả</h3>
      <h4 style={{padding: "10px"}}>{description}</h4>

      <div >
        <VideoList onVideoClick={handleVideoClick} id={id}/> {/* Pass the click handler as a prop */}
      </div>
      <FooterContainer />
    </div>
  );
};

export default VideoContainer;