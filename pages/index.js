import { Fragment } from 'react';

import Hero from '@/components/home-page/hero';
import FeaturedPosts from '@/components/home-page/featured-posts';
import { DUMMY_POSTS } from '@/dummy-data';

const posts = DUMMY_POSTS;

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export default HomePage;
