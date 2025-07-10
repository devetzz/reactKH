import './Header.css';
import { memo } from 'react';

const Header = ()=>{
    console.log('Header reRendering');
    return (
        <header className='Header'>
            <h3>오늘은 📅</h3>
            <h1>{new Date().toDateString()}</h1>
        </header>
    );
};

// const memorizedHeader = memo(Header);
export default memo(Header);