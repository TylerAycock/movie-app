import Link from 'next/link'
import classes from './Hero.module.css'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className={classes.hero}>
            <div className={classes.image}>
                <Image src={'/images/hero.png'} alt='hero image' height={200} width={300} />
            </div>
            <h1>Welcome to WatchMe</h1>
            <p>Produce Film Feature, Television and Game</p>
            <Link href={'/contact'}>
                <button>Contact Us</button>
            </Link>
        </div>
    )
}