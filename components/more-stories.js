import PostPreview from '../components/post-preview'

export default function MoreStories({ title, posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  md:gap-x-12 lg:gap-x-24 gap-y-12 md:gap-y-24 mb-24">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
