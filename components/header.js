import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">yomoyama</a>
      </Link>
      .
    </h2>
  )
}