import JanWhite from '../images/JanWhite.jpeg'
import Dental from '../images/Dental.jpg'

function Images(){
    return(
        <div>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            </head>
            <img className='image1' src={JanWhite} />
            <img src={Dental} className='image1'/>
        </div>
    )
}

export default Images