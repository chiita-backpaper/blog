import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container >
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-4"
            href="https://github.com/chiita-backpaper"
            role="button"
            data-mdb-ripple-color="dark"
          ><FontAwesomeIcon icon={faGithub} size="2x" /></a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-4"
            href="https://twitter.com/back_paper_"
            role="button"
            data-mdb-ripple-color="dark"
          ><FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-4"
            href="https://www.instagram.com/back_paper_/"
            role="button"
            data-mdb-ripple-color="dark"
          ><FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

        </div>
      </Container>
    </footer >
  )
}
