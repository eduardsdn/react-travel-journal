import '../style.css';
import logo from '../assets/globe.svg'

export default function Header(){
    return(
        <header>
            <img className='header-logo' src={logo} alt="logo" />
            <h1 className='header-title'>my travel journal.</h1>
        </header>
    )
}