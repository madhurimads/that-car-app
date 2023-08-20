import Image from './Image';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
        <Image logo={props.carTitleLogo}></Image>
        <text>{props.carTitle}</text>
        </div>
    );
}

export default Header;