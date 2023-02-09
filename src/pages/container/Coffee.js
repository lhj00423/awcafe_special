import React from 'react';
import Coldbrew from '../detailcoffee/Coldbrew';
import './Coffee.css'


const Coffee = () => {
    return (
        <div id='Coffee'>
            <h2>COFFEE</h2>
            <div id='select'>
                <div id='selecttitle'>
                    <p>분류보기</p>
                    <button>접기</button>
                </div>
                <div>
                    <div id='check'>
                        <button>카테고리</button>
                        <button>테마</button>
                    </div>
                    <ul>
                        <li><input type="checkbox"/><label>전체상품보기</label></li>
                        <li><input type="checkbox"/><label>콜드 브루 커피</label></li>
                        <li><input type="checkbox"/><label>브루드 커피</label></li>
                        <li><input type="checkbox"/><label>에스프레소</label></li>
                        <li><input type="checkbox"/><label>프라푸치노</label></li>
                        <li><input type="checkbox"/><label>블렌디드</label></li>
                        <li><input type="checkbox"/><label>AW 리프레셔</label></li>
                        <li><input type="checkbox"/><label>AW 피지오</label></li>
                        <li><input type="checkbox"/><label>티(티바나)</label></li> 
                    </ul>
                    <div>
                        <Coldbrew/>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>  
        </div>
    );
};

export default Coffee;