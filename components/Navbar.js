import Link from 'next/link';


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
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