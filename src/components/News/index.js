import { Typography } from "@mui/material"
import MediaCard from "../MediaCard"
import "./News.css"
import CustomButton from "../../common/Button"
const News = ({content}) => {
  content = [{ title:'Lizard',
  description:'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
  image:'https://eskipaper.com/images/free-high-resolution-images-1.jpg',
  width:1200,
  display:'verticle'},{ title:'Lizard',
  description:'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
  image:'https://eskipaper.com/images/free-high-resolution-images-1.jpg',
  width:1200,
  display:'verticle'},{ title:'Lizard',
  description:'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
  image:'https://eskipaper.com/images/free-high-resolution-images-1.jpg',
  width:1200,
  display:'verticle'},{ title:'Lizard',
  description:'Some description about this Lizard which is found in the dangerous and cold desert of Pakistan',
  image:'https://eskipaper.com/images/free-high-resolution-images-1.jpg',
  width:1200,
  display:'verticle'},]
  
return(
    <>
    <Typography style={{marginTop:'50px',marginBottom:'70px', display:'flex',alignContent:'center',justifyContent:'center',backgroundColor:'black',color:'white'}} variant='h4'>Recent Posts</Typography>
    {
      content.map((element)=>{
        return <MediaCard
        title={element.title}
        description={element.description}
        image={element.image}
        width={1300}
        display={'verticle'}
        
        />
      })
    }
    <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
    <CustomButton text={'See More'}/>
    </div>
    
    </>
)
}
export default News