import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData } from '@/lib/posts-util';
import { getPostsFiles } from '@/lib/posts-util';

function PostDetailPage({ post }) {
  return (
    <PostContent
      slug={post.slug}
      title={post.title}
      image={post.image}
      content={post.content}
    />
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((filenName) =>
    filenName.replace(/\.md$/, '')
  );
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default PostDetailPage;
