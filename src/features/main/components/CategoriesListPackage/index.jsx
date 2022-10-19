import React from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';
import CategoriesPackageItem from '../CategoriesPackageItem';
import { Pagination } from 'antd';
import CategoriesPackageItemTemplate from '../CategoriesPackageItemTemplate';


let cx = classNames.bind(styles);


function CategoriesListPackage({tenLoaiCongViec,tenChitiet}) {
    return (
        <div>
            <div className='layout-row'>
                <div className={cx('list-package-wrapper','list-container')}>
                 <CategoriesPackageItemTemplate tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>
                </div>
                <Pagination defaultCurrent={1} total={50} className={cx('pagination')}/>
            </div>
        </div>
    );
}

export default CategoriesListPackage;