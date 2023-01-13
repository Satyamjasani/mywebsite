import { Container } from 'react-bootstrap';
import { GiAztecCalendarSun } from 'react-icons/gi';
import Navbar from './Navbar';
import Accordion from 'react-bootstrap/Accordion';


const Pages = () =>{
    return(
        <>
    <div className='wrapper bg1 ' >
       <Navbar/>  
        <section className='breadcrumb-wrap mb-80 pt-24 pb-24 bg-bottom bg-cover'>
        <div className='t_center mt-12'>
        <span className='breadcrumb__title t_white uppercase d-flex jcenter'>faq us</span>
            <nav className='breadcrumb jcenter '>
                <ol className=' breadcrumb_list  d-flex font-bold uppercase'>
                    <li className='breadcrumb__list__item p-0 '>
                        <a className='breadcrumb__link' href='/'>Home</a>
                    </li>
                    <span className='t_white mx-2'>/</span>
                    <li className='breadcrumb__list__item p-0'>
                        <a className='breadcrumb__link_disable' href='#'>faq</a>
                    </li>
                </ol>
            </nav>
        </div>
        </section>


       <section className='upcoming-gaming-section'>
        <Container>
        <div className='spacX'>


        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


        </div>
        </Container>
       </section>
       </div>
      
     
        </>
    )
}
export default Pages;