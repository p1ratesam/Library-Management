import React, { useRef, useEffect } from 'react';
import './LocalVideoRemoteView.css';


// const LocalVideoRemoteView = props => {
//   const { localRemoteStream } = props;
//   const localVideoRemoteRef = useRef();

//   useEffect(() => {
//     if (localRemoteStream) {
//       const localRemoteVideo = localVideoRemoteRef.current;
//       localRemoteVideo.srcObject = localRemoteStream;

//       localRemoteVideo.onloadedmetadata = () => {
//         localRemoteVideo.play();
//       };
//     }
//   }, [localRemoteStream]);

//   return (
//     <div className='videoRemoteContainer'>
//       <video className='videoRemoteElement' ref={localVideoRemoteRef} autoPlay muted />
//     </div>
//   );
// };

// export default LocalVideoRemoteView;
const LocalVideoView = props => {
    const { localStream } = props;
    const localVideoRef = useRef();
  
    useEffect(() => {
      if (localStream) {
        const localVideo = localVideoRef.current;
        localVideo.srcObject = localStream;
  
        localVideo.onloadedmetadata = () => {
          localVideo.play();
        };
      }
    }, [localStream]);
    return (
        <div className='videoRContainer'>
          <video className='videoRElement' ref={localVideoRef} autoPlay muted />
        </div>
      );
    };
    
    export default LocalVideoView;
      