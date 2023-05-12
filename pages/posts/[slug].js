import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData } from '@/lib/posts-util';
import { getPostsFiles } from '@/lib/posts-util';
import Head from 'next/head';
import { Fragment } from 'react';

function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent
        slug={post.slug}
        title={post.title}
        image={post.image}
        content={post.content}
      />
    </Fragment>
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
