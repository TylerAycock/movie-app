import classes from './Navbar.module.css'
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul>
                <Link href={'/'}>Watch <span className={classes.me}>Me</span></Link>
                <Link href={'/contact'}>Contact</Link>
            </ul>
        </nav>
    )
}
