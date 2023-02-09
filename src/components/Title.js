import React from 'react';
 
//스타일 변경
const titleStyle ={
    padding : "60px 10px",
    fontSize : "24px"
}

const Title = ({title,desc}) => {
    return (
        <div style={titleStyle}>
           <p>{title}<span>{desc}</span></p> 
           
        </div>
    );
};

export default Title;