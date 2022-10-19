import React, { useState } from 'react';
import { useScrollPosition } from "common/hooks/scrollPostion";

import classNames from "classnames/bind";
import styles from './style.module.scss';
import { Switch } from 'antd';
import CategoriesFilterTouchMobile from '../CategoriesFilterTouchMobile';
import CategoriesFilterSortTouchMobile from '../CategoriesFilterSortTouchMobile';


let cx = classNames.bind(styles);

function CategoriesFilterSelectedMobile(props) {
    const [openModal, setOpenModal] = useState(0);
    const scrollPosition = useScrollPosition();
    const handlescroll = scrollPosition > 120 ? 'scroll-wrapper': '';

    function handleModal(index){
      index === openModal ? setOpenModal(0) :  index === 1 ? setOpenModal(1) : setOpenModal(2);
   
    }
    return (
        <div className={cx('wrapper',`${handlescroll}`)}>
          <div className="layout-row">
            <div className={cx('filter-wrapper')}>
                <button className={cx('touch-filter')} onClick={() => {handleModal(1)}}>Filter</button>
                <button className={cx('sort-button')}  onClick={() => {handleModal(2)}}>Sort</button>
            </div>
            <div className={cx('ft-toggles-wrapper')}>
            <div className={cx('tg-menu')}>
                            <div className={cx('tg-menu-item')}>
                                <Switch size='small' className={cx('tg-menu-switch')}/>
                                <span className={cx('tg-label')}>Top Rated Selled</span>
                            </div>
            </div>
            </div>
           
          </div>
          {openModal === 1 ? <CategoriesFilterTouchMobile handleModal={handleModal} show={true}/> :""}
          {openModal === 2 ? <CategoriesFilterSortTouchMobile handleModal={handleModal} show={true} /> : ""}
          
        </div>
    );
}

export default CategoriesFilterSelectedMobile;