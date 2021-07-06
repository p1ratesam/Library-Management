import React from 'react';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCallRoomsListItem = ({ room }) => {
  const handleListItemPressed = () => {
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <div onClick={handleListItemPressed} className='group_calls_list_item'>
        <image src='https://cdn5.vectorstock.com/i/thumbs/59/59/closed-door-vector-1535959.jpg' alt ='door'/>
        <span className='group_calls_list_item_host'>{room.hostName}</span>
    </div>
  );
};

export default GroupCallRoomsListItem;
