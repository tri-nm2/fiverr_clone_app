import React from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';


let cx = classNames.bind(styles);
function CategoriesCarouselItem(props) {
    const {img, text} = props;
    return (
        <div>
            <div className={cx('item-wrapper')}>
                <a className={cx('title','box-item')}>
                    <img src={img} alt={text}></img>
                    <p className={cx('text')}>{text}</p>
                </a>
            </div>
        </div>
    );
}

export default CategoriesCarouselItem;