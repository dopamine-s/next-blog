import Image from 'next/image';

import classes from './post-header.module.css';

function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={300}
        height={180}
        quality={100}
        priority
      />
    </header>
  );
}

export default PostHeader;
