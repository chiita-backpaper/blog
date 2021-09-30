import { CMS_NAME } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-center lg:justify-Start mt-16 mb-16 lg:mb-12">
      <div className="flex items-end ..">
        <h1 className="text-4xl lg:text-8xl font-bold tracking-tighter leading-tight lg:pr-4">
          yomoyamabanashi.
        </h1>
        {/* <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
          <div className="flex items-center">
            <h3 className="text-sm lg:text-4xl ml-2 lg:ml-4 mb-1 lg:mb-4" >technology</h3>
            <h3 className="text-sm lg:text-4xl ml-2 lg:ml-4 mb-1 lg:mb-4" >hobby</h3>
            <h3 className="text-sm lg:text-4xl ml-2 lg:ml-4 mb-1 lg:mb-4" >about</h3>
          </div>
        </h2> */}
      </div>
    </section >
  )
}
