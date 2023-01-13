import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Upcomingmatch from './Upcomingmatch';

const Match = () =>{
    return(
        <>
    <div className='wrapper bg1 ' >
       <Navbar/>  
        <section className='breadcrumb-wrap mb-80 pt-24 pb-24 bg-bottom bg-cover'>
        <div className='t_center mt-12'>
        <span className='breadcrumb__title t_white uppercase d-flex jcenter'>UPCOMING MATCH</span>
            <nav className='breadcrumb jcenter '>
                <ol className=' breadcrumb_list  d-flex font-bold uppercase'>
                    <li className='breadcrumb__list__item p-0 '>
                        <a className='breadcrumb__link' href='/'>Home</a>
                    </li>
                    <span className='t_white mx-2'>/</span>
                    <li className='breadcrumb__list__item p-0'>
                        <a className='breadcrumb__link_disable' href='#'>Match</a>
                    </li>
                </ol>
            </nav>
        </div>
        </section>

        <Upcomingmatch/>

       </div>
      
       
        </>
    )
}
export default Match;