import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{ pathname:props.path , state:{
            name:props.text,
            image:props.src,
            type:props.inventory,
            author:props.author,
            description:props.text+'is excellent.' +props.author+' spent a lot of effort, please be sure to ' +
                'read this book actively! It contains a large number of characters and philosophy of life, and ' +
                'many celebrities have recommended this book. This book is suitable for a person\'s whole life. ' +
                'Hope you get your hands on z'+props.text+'! Action is worse than heartbeat!',
            price:props.price,
            isbn:props.ISBN,
          }}} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h6 className='cards__item__author'>{props.author}</h6>
            <h6 className='cards__item__price'>{props.price}</h6>
            <h7 className='cards__item__ISBN'>ISBN:{props.ISBN}</h7>
            {/*<h7 className='cards__item__inventory'>inventory:{props.inventory}</h7>*/}
          </div>
        </Link>
      </li>
    </>
  );
}
export default CardItem;
