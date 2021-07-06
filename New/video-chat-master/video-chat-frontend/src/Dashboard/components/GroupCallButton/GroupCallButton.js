import React from 'react';
import './GroupCallButton.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const GroupCallButton = ({ onClickHandler, label }) => {
  return (
    <PrimaryButton onClick={onClickHandler} className='group_call_button background_main_color' >
      { label }
    </PrimaryButton>
  );
};

export default GroupCallButton;
 