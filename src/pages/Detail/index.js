import Categories from "../../components/Categories"
import RelatedPosts from '../../components/Posts'
import MediaCard from "../../components/MediaCard"
import { Grid } from "@mui/material"
const Detail = () => {
return(
    <>
    <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
    <MediaCard
    title={'Lizard'}
    description={'Some description about this Lizard which is found in the dangerous and Some description about this Lizard which is found in the dangerous and cold desert of Pakistan Some description about this Lizard which is found in the dangerous and cold desert of Pakistan Some description about this Lizard which is found in the dangerous and cold desert of Pakistan cold desert of PakistanSome description about this Lizard which is found in the dangerous and cold desert of PakistanSome description about this Lizard which is found in the dangerous and cold desert of Pakistan'}
    image={'https://eskipaper.com/images/high-resolution-photos-1.jpg'}
    width={1000}
    isSmallImage={true}
   
    /> 
</div>
<Grid container spacing={2}>
  <Grid item xs={8}>
  <RelatedPosts title='See Related'/>
  </Grid>
  <Grid item xs={4}>
    <Categories/>
  </Grid>
 
</Grid>

</>
)
}
export default Detail