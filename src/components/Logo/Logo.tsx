import { Link } from 'react-router-dom';
import './style.css'

export const Logo = () => {
    return (
        <Link to={'/'}>
            <div>
                <h1 className='logoH1'>Logo</h1>
            </div>
        </Link>
    );
};