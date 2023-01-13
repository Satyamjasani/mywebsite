import { Button, Container, Row, Col, Carousel, } from 'react-bootstrap';
import './Mediaq.css';
import Navbar from './Navbar';
import Upcomingmatch from './Upcomingmatch';

const Home = () =>{
    return(
        <>
        <div className='bg1'>
        <div className='uperbgimg ' >
        <Navbar/>
      {/* body start */}
      <section>
        <Container>
          <Row>
          <div className='spacX' >
            <div className='Text'>
              <h1 className='uppercase' >best game playing today.</h1>
              <p className='font-bold'>Simply text of the printing and typesetting industry.</p>

              <Col className='btn btn2'>
                <a href='#'>
                  <img src={require('./image/btn2.webp')} />
                  <span>PLAY NOW</span>
                </a>
              </Col>
            </div>

            <div className='playerimg' >
              <img src={require('./image/2.webp')} />
            </div>
          </div>
          </Row>
        </Container>
      </section>
      
      
      {/* 2nd section start*/}
      <section>
        <Container>
          <div className='spacX' >
            <div align="center" className='mx-auto welcome'  >
              <h2 class="">YOU ARE MOST WELCOME IN <br></br> GAMING WORLD.</h2>
            </div>
          </div>
        </Container>
      </section>
      {/* 2nd section end */}
      </div>
      
      {/* Card section */}
      <section>
        <Container>
          <div className='spacX flex'>
            <div className='Card' >
              <div className='cardimage' >
                <img src={require('./image/card1.webp')} />
                <div className='cardplayerimg' >
                  <img src={require('./image/cardplayer.webp')} />
                </div>
              </div>
              <div className='cardText ' >
                <h3 className='uppercase' >Live streaming</h3>
                <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
              </div>
            </div>


            <div className='Card' >
              <div className='cardimage' >
                <img src={require('./image/card2.webp')} />
                <div className='cardplayerimg' >
                  <img src={require('./image/cardplayer2.webp')} />
                </div>
              </div>
              <div className='cardText ' >
                <h3 className='uppercase' >Live streaming</h3>
                <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
              </div>
            </div>



            <div className='Card' >
              <div className='cardimage' >
                <img src={require('./image/card3.webp')} />
                <div className='cardplayerimg' >
                  <img src={require('./image/cardplayer3.webp')} />
                </div>
              </div>
              <div className='cardText ' >
                <h3 className='uppercase' >Live streaming</h3>
                <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Card section end */}

      {/* Slider 1  */}
      <Container>
        <div className='spacX'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./image/asset 19.webp')}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className='caption' >
                  <img src={require('./image/asset 23.webp')} />
                  <div className='slidtext uppercase' >
                    <h3>WATCH LIVE STREAMING</h3>
                  </div>
                </div>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./image/asset 19.webp')}
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className='caption' >
                  <img src={require('./image/asset 23.webp')} />
                  <div className='slidtext uppercase' >
                    <h3>SKRIT Watch Live</h3>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./image/asset 19.webp')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className='caption' >
                  <img src={require('./image/asset 23.webp')} />
                  <div className='slidtext uppercase' >
                    <h3>WATCH LIVE STREAMING</h3>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
      {/* Slider 1 end */}


      {/*  */}
      {/*  */}

      <Upcomingmatch/>

      </div>

        </>
    )
}
export default Home;