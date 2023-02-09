import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { getDatas } from '../../modules/special';
import Coldbrewitem from './Coldbrewitem';



const Coldbrew = () => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW`);
    console.log(data);
    return data;
    }
    CPData();
    // const {loading, data, error} = useSelector(state=>state.special.specials);
    // const dispatch = useDispatch();
    // useEffect(()=>{ 
    //     dispatch(getDatas(CPData))
    // },[dispatch])
    // if(loading) return <div>로딩중입니다.</div>
    // if(error) return <div>에러가 발생했습니다.</div>
    // if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            {/* <Coldbrewitem data={data}/> */}
        </div>
    );
};

export default Coldbrew;