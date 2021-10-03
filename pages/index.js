import { Container, FlexContainer, CategoryContainer } from '..//components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import CategoryList from '../components/category-list'
import Layout from '../components/layout'
import { getAllPosts, getCategoryDict } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, categoryDict }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>yomoyamabanashi </title>
        </Head>
        <FlexContainer>
          <Container>
            <Intro />
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                category={heroPost.category}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories title="過去の記事" posts={morePosts} />}

          </Container>
          <CategoryList categoryDict={categoryDict} />
        </FlexContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'category',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const categoryDict = getCategoryDict()

  return {
    props: { allPosts, categoryDict }
  }
}
