import React from 'react';
import CategoriesCarouselItem from '../CategoriesCarouselItem';

import classNames from "classnames/bind";
import styles from './style.module.scss';


let cx = classNames.bind(styles);

function CategoriesCarousel(props) {
    return (
        <div>
            <div className='layout-row'>
                <div className={cx('carousel-wrapper')}>
                    <div className={cx('slider-package')}>
                        <div className={cx('list-package')}>
                            <CategoriesCarouselItem img={'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/1070.svg'} text={'Full App Creation'}/>
                            <CategoriesCarouselItem img={'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/1072.svg'} text={'App Customization'}/>
                            <CategoriesCarouselItem img={'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/1071.svg'} text={'Convert Site to App'}/>
                            <CategoriesCarouselItem img={'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/1074.svg'} text={'Help/Consultation'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesCarousel;