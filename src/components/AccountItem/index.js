
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6c820fa8b3b3555e029fcf245ce24c95~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=31c15df8&x-expires=1769569200&x-signature=hfdXrsXdqvyfCL2%2BfJeffRQQGUM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyễn Văn A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;