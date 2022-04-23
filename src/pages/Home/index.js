import Categories from '../../components/Categories'
import HotNews from '../../components/HotNews'
import RecentNews from '../../components/News'
import './Home.css'
import { Grid } from '@mui/material'
const Home = () =>{
return(
    <div className='container'>
    <HotNews/>
    <div className='topBtm-margin' >
    <Grid container spacing={2}>
  <Grid item xs={8}>
  <RecentNews/>
  </Grid>
  <Grid item xs={4}>
    <Categories/>
  </Grid>
  </Grid>
    </div>
    </div>
)
}
export default Home