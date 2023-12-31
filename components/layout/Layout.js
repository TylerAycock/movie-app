
import Meta from '../meta'
import classes from './Layout.module.css'
import Navbar from "./Navbar"

export default function Layout(props) {
    return (
        <div className={classes.main__container}>
            <Meta />
            <Navbar />
            <main>
                {props.children}
            </main>
        </div>
    )
}