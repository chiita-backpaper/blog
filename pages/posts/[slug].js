import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Container, FlexContainer, CategoryContainer } from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import CategoryList from '../../components/category-list'
import Layout from '../../components/layout'
import { getAllPosts, getPostsByCategory, getPostSlugs, getPostBySlug, getCategoryDict } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, categoryDict, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <FlexContainer>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {"yomoyamabanashi-" + post.title}
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  category={post.category}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
          <CategoryList categoryDict={categoryDict} />
        </FlexContainer>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'category',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  const categoryDict = getCategoryDict()

  return {
    props: {
      post: {
        ...post,
        content,
      },
      categoryDict: categoryDict
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
