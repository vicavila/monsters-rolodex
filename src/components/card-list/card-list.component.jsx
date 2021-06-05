import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
 return <div><h1>{props.name}</h1><div className="card-list">{props.children}</div></div>;
};
