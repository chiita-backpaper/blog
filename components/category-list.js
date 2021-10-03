import Link from 'next/link'

export default function CategoryList({ categoryDict }) {
    return (
        <div className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
            <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-18">
                <div className="mb-8"></div>
                <ul className="overflow-x-hidden text-gray-500 font-medium">
                    {Object.keys(categoryDict).map((category) => {
                        return (
                            <li className="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900" key={category}>
                                <Link as={`/categories/${category}`} href="/categories/[category]">
                                    <a className="hover:underline"> {category}({categoryDict[category]})</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
