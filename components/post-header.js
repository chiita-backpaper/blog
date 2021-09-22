import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Link from 'next/link'

export default function PostHeader({ title, category, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <h3 className="text-2xl mb-3 leading-snug">
        Category:
        <Link as={`/categories/${category}`} href="/categories/[category]">
          <a className="hover:underline"> {category}</a>
        </Link>
      </h3>
      <div className="hidden lg:block lg:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 lg:mb-16 mx-20 lg:mx-80">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
