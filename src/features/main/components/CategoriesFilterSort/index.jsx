import React, { useState } from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';

import { DownOutlined } from '@ant-design/icons';

let cx = classNames.bind(styles);
function CategoriesFilterSort(props) {
    const [open, setOpen] = useState(false);
    function handleShowFilter(){
        setOpen(!open);
    }
    return (
        <div>
            <div className='layout-row'>
                <div className={cx('ft-sort-wrapper')}>
                <div className={cx('result-info')}>
                    <div className={cx('number-of-result')}>
                        <span>91,697 services available</span>
                    </div>
                </div>
                <div className={cx('sort-by-wrapper')}>
                <div className={cx('ft-menu','grouped')}>
                           <div className={cx('ft-menu-title')}>
                            <span>Sort by <span  className={cx('ft-menu-title-text')}>Recommended</span></span>
                            <span className={ open ? cx('ft-menu-title-icondown', 'open') : cx('ft-menu-title-icondown')}  onClick={() => {handleShowFilter()}}><DownOutlined /></span>
                           </div>
                           <div className={open ? cx('ft-menu-content', 'open') : cx('ft-menu-content') }>
                                <div className={cx('content-scroll')}>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Best Selling</div>
                                    </div>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Newest Arrivals</div>
                                    </div>
                                </div>
                           </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesFilterSort;