import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import DateFormatter from '../../components/date-formatter'
import Avatar from '../../components/avatar'
import Layout from '../../components/layout'
import { getAllPosts, getPostsByCategory } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import MoreStories from '../../components/more-stories';

export default function Category({ posts, morePosts, preview }) {
	const router = useRouter()
	if (!router.isFallback && !posts) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<Layout preview={preview}>
			{console.log(posts)}
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
						<>
							<Head>
								<title>
									{"yomoyama-" + posts[0].category}
								</title>
								{/* <meta property="og:image" content={posts[0].ogImage.url} /> */}
								{/* ogImageって何？ */}
							</Head>
							<Container>
								<MoreStories title={posts[0].category} posts={posts} />
							</Container>
						</>
					)}
			</Container>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const posts = getPostsByCategory(params.category, [
		'title',
		'category',
		'date',
		'slug',
		'author',
		// 'content',
		'ogImage',
		'coverImage',
	])
	// const content = await markdownToHtml(post.content || '')

	return {
		props: {
			posts: posts
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['category'])
	// console.log(posts)
	// console.log(posts.map((post) =>
	// 	typeof (post.category)
	// ))
	return {
		paths: posts.map((post) => {
			return {
				params: {
					category: post.category,
				},
			}
		}),
		fallback: false,
	}
}
