import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


import PopperWrapper from '~/components/Popper/Wrapper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, SetsearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            SetsearchResult([])
        }, 0)
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <div className={cx('search-result')}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        </div>
                    )}
                >

                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm"
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>

                </div>
            </div>
        </header >
    );
}

export default Header;
