import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { NextPagination, Pagination, PrevPagination, Spacer } from '@1milligram/design';

import { Markdown } from '../components/Markdown';
import { PostLayout } from '../layouts/PostLayout';

interface PostPageParams {
    slug: string;
}
interface PostPageProps {
    content: string;
    frontMatter: { [key: string]: any };
    prevPost?: PrevNextPostProps;
    nextPost?: PrevNextPostProps;
}
interface PrevNextPostProps {
    slug: string;
    title: string;
}

const POSTS_DIR = 'posts';

const PostPage: React.FC<PostPageProps> = ({ content, frontMatter, prevPost, nextPost }) => {
    return (
        <PostLayout keywords={frontMatter ? frontMatter.keywords : ''} title={frontMatter.title}>
            <Markdown>{content}</Markdown>
            <Spacer size="medium" />
            <Pagination>
                {prevPost && <PrevPagination href={`/${prevPost.slug}`}>{prevPost.title}</PrevPagination>}
            </Pagination>
            <Pagination>
                {nextPost && <NextPagination href={`/${nextPost.slug}`}>{nextPost.title}</NextPagination>}
            </Pagination>
        </PostLayout>
    );
};

export const getStaticProps = async ({ params }: { params: PostPageParams }) => {
    const { slug } = params;
    const postFile = `${slug}.md`;
    const postFilePath = join(POSTS_DIR, postFile);
    const fileContents = fs.readFileSync(postFilePath);
    const { data: frontMatter, content } = matter(fileContents);

    // Determine the next and previous posts
    const files = fs.readdirSync(join(POSTS_DIR));
    const index = files.indexOf(postFile);

    const prevPost =
        index <= 0
            ? null
            : {
                  slug: files[index - 1].replace('.md', ''),
                  title: matter(fs.readFileSync(join(POSTS_DIR, files[index - 1]))).data.title,
              };
    const nextPost =
        index >= files.length - 1
            ? null
            : {
                  slug: files[index + 1].replace('.md', ''),
                  title: matter(fs.readFileSync(join(POSTS_DIR, files[index + 1]))).data.title,
              };

    return {
        props: {
            content,
            frontMatter,
            prevPost,
            nextPost,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = fs
        .readdirSync(POSTS_DIR)
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default PostPage;
