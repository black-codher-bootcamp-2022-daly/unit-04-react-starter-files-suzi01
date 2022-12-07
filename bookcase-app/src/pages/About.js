import {React} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import '../pages/About.css'

const About = () => {
    return <>
            <Header />
            <div className='header'>
                <h2>Welcome to the Bookcase Application</h2>
                <p>
                    The following application was created by Suzannah. This bookcase app displays a list 
                    of books that user can save to a local bookcase.
                </p>
                <br />
                <p>
                    Click on the "Add +" button to add to your bookcase. Use the search bar to find the latest 
                    book by name, author or description
                </p>
            </div>
            
        </>

}

export default About