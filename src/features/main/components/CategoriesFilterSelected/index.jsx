import React, { useState } from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';

import { DownOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import CategoriesFilterSort from '../CategoriesFilterSort';

let cx = classNames.bind(styles);

function CategoriesFilterSelected(props) {
    const [open, setOpen] = useState(0);
    function handleShowFilter(index){
        if(index === open){
            setOpen(0);
        }else{
            setOpen(index);
        }
       
    }
    return (
        <div>
           <div className='layout-row'>
                <div className={cx('filter-wrapper')}>
                    <div className={cx('ft-top-filter-wrapper')}>
                        <div className={cx('ft-menu','grouped')}>
                           <div className={cx('ft-menu-title')}>
                            <span className={cx('ft-menu-title-text')}>Service Options</span>
                            <span className={ open === 1 ? cx('ft-menu-title-icondown', 'open') : cx('ft-menu-title-icondown')}  onClick={() => {handleShowFilter(1)}}><DownOutlined /></span>
                           </div>
                           <div className={open === 1 ? cx('ft-menu-content', 'open') : cx('ft-menu-content') }>
                                <div className={cx('content-scroll')}>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Programming languge</div>
                                        <div className={cx('checkbox-list')}>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='html_css' value='html_css'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>HTML & CSS</span>
                                                    <span className={cx('count')}>(30,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='php' value='php'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>PHP</span>
                                                    <span className={cx('count')}>(20,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='javascript' value='javascript'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Javascript</span>
                                                    <span className={cx('count')}>(100,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='reactjs' value='reactjs'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>ReactJS</span>
                                                    <span className={cx('count')}>(1020,123)</span>
                                                </div>

                                            </div>
                                        </div>
                                        <span className={cx('show-more-less')}>+11 more</span>
                                    </div>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Expertise</div>
                                        <div className={cx('checkbox-list')}>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='design' value='design'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Design</span>
                                                    <span className={cx('count')}>(30,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='performance' value='performance'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Performance</span>
                                                    <span className={cx('count')}>(20,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='javascript' value='javascript'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Javascript</span>
                                                    <span className={cx('count')}>(100,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='reactjs' value='reactjs'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>ReactJS</span>
                                                    <span className={cx('count')}>(1020,123)</span>
                                                </div>

                                            </div>
                                        </div>
                                        <span className={cx('show-more-less')}>+11 more</span>
                                    </div>
                                </div>
                                <div className={cx('menu-filter-button')}>
                                        <a className={cx('clear-all')}>Clear All</a>
                                        <a className={cx('apply')}>Apply</a>
                                </div>
                           </div>
                        </div>
                        <div className={cx('ft-menu','grouped')} >
                           <div className={cx('ft-menu-title')}>
                            <span className={cx('ft-menu-title-text')}>Seller Details</span>
                            <span  className={ open === 2 ? cx('ft-menu-title-icondown', 'open') : cx('ft-menu-title-icondown')} onClick={() => {handleShowFilter(2)}}><DownOutlined /></span>
                           </div>
                           <div className={open === 2 ? cx('ft-menu-content', 'open') : cx('ft-menu-content') }>
                                <div className={cx('content-scroll')}>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Seller Level</div>
                                        <div className={cx('checkbox-list')}>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='top_rate_seller' value='top_rate_seller'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Top Rated Seller</span>
                                                    <span className={cx('count')}>(384)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='level_two' value='level_two'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Level Two</span>
                                                    <span className={cx('count')}>(8,341)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='level_one' value='level_one'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Level One</span>
                                                    <span className={cx('count')}>(11,998)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='new_seller' value='new_seller'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>ReactJS</span>
                                                    <span className={cx('count')}>(22,123)</span>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <span className={cx('show-more-less')}>+11 more</span> */}
                                    </div>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Seller Speaks</div>
                                        <div className={cx('checkbox-list')}>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='english' value='english'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Engllsh</span>
                                                    <span className={cx('count')}>(22,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='urdu' value='urdu'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Urdu</span>
                                                    <span className={cx('count')}>(33,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='hindi' value='hindi'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>Hindi</span>
                                                    <span className={cx('count')}>(111,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='french' value='french'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>French</span>
                                                    <span className={cx('count')}>(332,123)</span>
                                                </div>

                                            </div>
                                        </div>
                                        <span className={cx('show-more-less')}>+26 more</span>
                                    </div>
                                    <div className={cx('menu-filter-item')}>
                                        <div className={cx('content-title')}>Seller Lives In</div>
                                        <div className={cx('checkbox-list')}>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='united_states' value='united_states'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>United States</span>
                                                    <span className={cx('count')}>(33,123)</span>
                                                </div>

                                            </div>
                                            <div className={cx('checkbox-item')}>
                                                <input type='checkbox' name='united_kingdom' value='united_kingdom'></input>
                                                <div className={cx('inner-checkbox')}>
                                                    <span className={cx('label')}>United Kingdom</span>
                                                    <span className={cx('count')}>(33,123)</span>
                                                </div>

                                            </div>
                                           
                                        </div>
                                        <span className={cx('show-more-less')}>+26 more</span>
                                    </div>

                                </div>
                                <div className={cx('menu-filter-button')}>
                                        <a className={cx('clear-all')}>Clear All</a>
                                        <a className={cx('apply')}>Apply</a>
                                </div>
                           </div>
                        </div>
                        <div className={cx('ft-menu')} >
                           <div className={cx('ft-menu-title')}>
                            <span className={cx('ft-menu-title-text')}>Budget</span>
                            <span  className={ open === 3 ? cx('ft-menu-title-icondown', 'open') : cx('ft-menu-title-icondown')} onClick={() => {handleShowFilter(3)}}><DownOutlined /></span>
                           </div>
                           <div className={open === 3 ? cx('ft-menu-content', 'open', 'budget') : cx('ft-menu-content', 'budget') }>
                           <div className={cx('content-scroll')}>
                                        <div className={cx('menu-filter-item-budget')}>
                                            <div className={cx('input-wrapper')}>
                                            <div className={cx('input-item')}>
                                                <span className={cx('label-title')}>MIN.</span>
                                                <div className={cx('input-min')}>
                                                <input type='number' name='min_input' placeholder='Any'></input>
                                                <span  className={cx('price-range')}>$</span>
                                                </div>
                                            </div>
                                            <div className={cx('input-item')}>
                                            <span className={cx('label-title')}>MAX.</span>
                                              <div className={cx('input-max')}>
                                              <input type='number' name='max_input' placeholder='Any'></input>
                                                <span className={cx('price-range')}>$</span>
                                              </div>
                                            </div>
                                            </div>
                                       </div>
                                </div>
                                <div className={cx('menu-filter-button')}>
                                        <a className={cx('clear-all')}>Clear All</a>
                                        <a className={cx('apply')}>Apply</a>
                                </div>
                           </div>
                        </div>
                        <div className={cx('ft-menu')}>
                           <div className={cx('ft-menu-title')}>
                            <span className={cx('ft-menu-title-text')}>Delivery Time</span>
                            <span  className={ open === 4 ? cx('ft-menu-title-icondown', 'open') : cx('ft-menu-title-icondown')}  onClick={() => {handleShowFilter(4)}}><DownOutlined /></span>
                           </div>
                           <div className={open === 4 ? cx('ft-menu-content', 'open') : cx('ft-menu-content') }>
                           <div className={cx('content-scroll')}>
                                    <div className={cx('menu-filter-item-deliverytime')}>
                                        <div className={cx('radio-list')}>
                                            <div className={cx('radio-item')}>
                                                <input type='radio' name='deliverytime'></input>
                                                <span>Express 24H</span>
                                            </div>
                                            <div className={cx('radio-item')}>
                                                <input type='radio' name='deliverytime'></input>
                                                <span>Up to 3 days</span>
                                            </div>
                                            <div className={cx('radio-item')}>
                                                <input type='radio' name='deliverytime'></input>
                                                <span>Up to 7 days</span>
                                            </div>
                                            <div className={cx('radio-item')}>
                                                <input type='radio' name='deliverytime'></input>
                                                <span>Anytime</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={cx('menu-filter-button')}>
                                        <a className={cx('clear-all')}>Clear All</a>
                                        <a className={cx('apply')}>Apply</a>
                                </div>
                           </div>
                        </div>
                     
                    </div>
                    <div className={cx('ft-toggles-wrapper')}>
                        <div className={cx('tg-menu')}>
                            <div className={cx('tg-menu-item')}>
                                <Switch size='small' className={cx('tg-menu-switch')}/>
                                <span className={cx('tg-label')}>Pro services</span>
                            </div>
                        </div>
                        <div className={cx('tg-menu')}>
                            <div className={cx('tg-menu-item')}>
                                <Switch size='small' className={cx('tg-menu-switch')}/>
                                <span className={cx('tg-label')}>Subscription services</span>
                            </div>
                        </div>
                        <div className={cx('tg-menu')}>
                            <div className={cx('tg-menu-item')}>
                                <Switch size='small' className={cx('tg-menu-switch')}/>
                                <span className={cx('tg-label')}>Online sellers</span>
                            </div>
                        </div>
                    </div>
                </div>
              
           </div>
           <CategoriesFilterSort />
        </div>
    );
}

export default CategoriesFilterSelected;