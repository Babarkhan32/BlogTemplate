import MediaCard from "../MediaCard"
import './Posts.css'
import { Typography } from "@mui/material"
const Posts = ({ content,title }) => {
    content = [{
        title: 'Lizard',
        description: 'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
        image: 'https://www.freegreatpicture.com/files/151/1384-high-resolution-pictures-of-birds.jpg',
        width: 1200,
        display: 'verticle'
    }, {
        title: 'Lizard',
        description: 'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
        image: 'https://www.freegreatpicture.com/files/151/1384-high-resolution-pictures-of-birds.jpg',
        width: 1200,
        display: 'verticle'
    }, {
        title: 'Lizard',
        description: 'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
        image: 'https://www.freegreatpicture.com/files/151/1384-high-resolution-pictures-of-birds.jpg',
        width: 1200,
        display: 'verticle'
    }, {
        title: 'Lizard',
        description: 'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
        image: 'https://www.freegreatpicture.com/files/151/1384-high-resolution-pictures-of-birds.jpg',
        width: 1200,
        display: 'verticle'
    },]



    return (
        <>    
        <Typography variant='h5' style={{display:'flex',alignContent:'center',justifyContent:'center',marginTop:'60px',marginBottom:'40px', backgroundColor:'black',color:'white'}}>{title}</Typography>
         <div className="parent">
            {
                content.map((element) => {
                    return (<div className='child'>
                        <MediaCard
                            title={element.title}
                            description={element.description}
                            image={element.image}
                            width={1200}
                            display={'verticle'}

                        />
                    </div>
                    )

                })
            }


        </div>
        </>

    )
}

export default Posts