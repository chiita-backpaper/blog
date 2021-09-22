import Link from 'next/link'

export default function CategoryList({ categories }) {
    return (
        <div class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
            <div class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-18">
                <div class="mb-8"></div>
                <ul class="overflow-x-hidden text-gray-500 font-medium">
                    {categories.map((category) => {
                        return (
                            <li class="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900" key={category}>
                                <Link as={`/categories/${category}`} href="/categories/[category]">
                                    <a className="hover:underline"> {category}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
