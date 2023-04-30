import AllPosts from '@/components/posts/all-posts';

import { DUMMY_POSTS } from '@/dummy-data';

const posts = DUMMY_POSTS;

function AllPostsPage() {
  return <AllPosts posts={posts} />;
}

export default AllPostsPage;
