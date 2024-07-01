import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import SmallBanner from '../components/SmallBanner'
const Home = () => {
  return (
    <>
      <div className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img className='img-fluid rounded-3' src={assets.mainBanner} alt="mainBanner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGER FOR PROS.</h4>
                  <h5>IPAD S13+ Pro</h5>
                  <p>From TND999 or TND41.62/mo</p>
                  <Link className='button'> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
               
                <SmallBanner category="BEST SAKE." title="IPAD S13+ Pro" price1="999" price2="41.62" img={assets.catbanner1} />
                <SmallBanner category="NEW ARRIVAL" title="But IPad Air" price1="999" price2="41.62" img={assets.catbanner2} />
                <SmallBanner category="NEW ARRIVAL" title="IPAD S13+ Pro" price1="999" price2="41.62" img={assets.catbanner3} />
                <SmallBanner category="NEW ARRIVAL" title="IPAD S13+ Pro" price1="999" price2="41.62" img={assets.catbanner4} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home