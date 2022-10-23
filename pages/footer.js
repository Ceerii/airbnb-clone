import {TbWorld} from 'react-icons/tb';
import {ImInstagram} from 'react-icons/im';
import {FaTwitter} from 'react-icons/fa';
import {CgFacebook} from 'react-icons/cg';

function Footer({watchElement, isMapShowing}) {
  return (
    <div
      className='footer'
      ref={watchElement}
      style={{display: isMapShowing ? 'none' : 'block'}}
    >
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-section'>
            <p className='footer-section-title'>Support</p>
            <ul className='footer-section-link-collection'>
              <li className='footer-section-link'>
                <a href='#'>Help Center</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>AirCover</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Safety information</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Supporting people with disabilities</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Cancellation options</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Our Covid-19 Response</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Report a neighboorhood concern</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <p className='footer-section-title'>Community</p>
            <ul className='footer-section-link-collection'>
              <li className='footer-section-link'>
                <a href='#'>Airbnb.org: disaster relief housing</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Support Afghan refugees</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Combating discrimination</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <p className='footer-section-title'>Hosting</p>
            <ul className='footer-section-link-collection'>
              <li className='footer-section-link'>
                <a href='#'>Try hosting</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>AirCover for Hosts</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Explore hosting resources</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Visit our community forum</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>How to host responsibly</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <p className='footer-section-title'>Airbnb</p>
            <ul className='footer-section-link-collection'>
              <li className='footer-section-link'>
                <a href='#'>Newsroom</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Learn about new features</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Letter from our founders</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Careers</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Investors</a>
              </li>
              <li className='footer-section-link'>
                <a href='#'>Gift cards</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-item'>
            <div className='footer-bottom-language'>
              <span className='footer-bottom-bold-item pointer'>
                <TbWorld className='footer-bottom-icon' /> English (US)
              </span>
              <span className='footer-bottom-bold-item pointer'>$ USD</span>
            </div>
            <div className='footer-bottom-social'>
              <ul className='footer-bottom-social-list'>
                <li className='footer-bottom-social-list-item'>
                  <a href='#' aria-label='Facebook'>
                    <CgFacebook className='footer-social-icon' />
                  </a>
                </li>
                <li className='footer-bottom-social-list-item'>
                  <a href='#' aria-label='Twitter'>
                    <FaTwitter className='footer-social-icon' />
                  </a>
                </li>
                <li className='footer-bottom-social-list-item'>
                  <a href='#' aria-label='Instagram'>
                    <ImInstagram className='footer-social-icon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-bottom-left-reverse'>
            <div className='footer-bottom-item'>
              <p>© 2022 Airbnb, Inc.</p>
            </div>
            <div className='footer-bottom-item pointer'>
              <p>
                Privacy <span>.</span> Terms <span>.</span> Sitemap
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
