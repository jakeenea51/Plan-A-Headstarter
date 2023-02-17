import React, { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import { useClient } from "../../services/settings";
import { useNavigate } from "react-router-dom";

export const VideoPlayer = ({ user }) => {
  const ref = useRef();
  const client = useClient();
  const navigate = useNavigate();

  const [muteMic, setMuteMic] = useState(false);
  const [muteVid, setMuteVid] = useState(false);

  const leaveChannel = async () => {
    setMuteMic(true);
    setMuteVid(true);
    await client.leave();
    client.removeAllListeners();
    navigate("/home");
  };

  useEffect(() => {
    if (muteVid === false && user.videoTrack) {
      user.videoTrack.play(ref.current);
    } else {
      user.videoTrack.stop();
    }
  }, [muteVid, user.videoTrack]);

  useEffect(() => {
    if (muteMic === false && user.audioTrack) {
      user.audioTrack.play();
    } else {
      user.audioTrack.stop();
    }
  }, [muteMic, user.audioTrack]);

  return (
    <div className="VideoContainer">
      <div className="ButtonContainer">
        <button className="VideoButton" onClick={() => setMuteVid(!muteVid)}>
          {muteVid ? <VideocamOff /> : <Videocam />}
        </button>
        <button className="VideoButton" onClick={() => setMuteMic(!muteMic)}>
          {muteMic ? <MicOff /> : <Mic />}
        </button>
        <button className="VideoButton" onClick={() => leaveChannel()}>
          Leave
        </button>
      </div>
      <div ref={ref} style={{ width: "200px", height: "200px" }}></div>
    </div>
  );
};
