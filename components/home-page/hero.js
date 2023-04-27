import Image from 'next/image';

import heroImg from '@/public/images/site/fedor.jpg';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={heroImg} alt="An image of Fedor" />
      </div>
      <h1>Hi! I&apos;m Fedor.</h1>
      <p>
        I blog about my life.
        <br /> Studying frontend, traveling, listening to music.
      </p>
    </section>
  );
}

export default Hero;
