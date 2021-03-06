import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  category,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      {/* <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div> */}
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          最新記事
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <h3 className="mb-4 text-2xl lg:text-4xl leading-tight">
            Category:
            <Link as={`/categories/${category}`} href="/categories/[category]">
              <a className="hover:underline"> {category}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  )
}
