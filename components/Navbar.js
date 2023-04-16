import Link from 'next/link';
import styles from '../styles/Navbar.module.css';


const Navbar = () => {
    return ( 
        <nav  className={styles.navbar} >
            <div className={styles.logo}>
                Course Direcoty
            </div>

            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/courses">Courses</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;