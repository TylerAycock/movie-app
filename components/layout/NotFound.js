import classes from './NotFound.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <div className={classes.container}>
            <h1>404</h1>
            <h6><span>OOPS!</span> Page Not Found</h6>
            <Link href={'/'}>
                <button>Go Home</button>
            </Link>
        </div>
    )
}