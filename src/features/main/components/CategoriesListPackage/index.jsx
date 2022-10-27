import React from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';
import CategoriesPackageItem from '../CategoriesPackageItem';
import { Pagination } from 'antd';
import CategoriesPackageItemTemplate from '../CategoriesPackageItemTemplate';


let cx = classNames.bind(styles);


function CategoriesListPackage({tenLoaiCongViec,tenChitiet, categoriesData, jobid}) {
  
    return (
        <div>
            <div className='layout-row'>
                <div className={cx('list-package-wrapper','list-container')}>
                 {categoriesData.map( (item,index) =>  <CategoriesPackageItemTemplate key={index} item={item} jobid={jobid} tenLoaiCongViec={tenLoaiCongViec} tenChitiet={tenChitiet}/>)}
                </div>
                <Pagination defaultCurrent={1} total={1} className={cx('pagination')}/>
            </div>
        </div>
    );
}

export default CategoriesListPackage;