import React from 'react';
import { API_URL } from '../../config/apiurl';

const Coldbrewitem = (item) => {
    return (
    <li className='coldbrewitem'>
        <img src={`${API_URL}/upload/event/${item.co_img}`} alt=""/>
        <p>{item.co_name}</p>
    </li>
    );
};

export default Coldbrewitem;