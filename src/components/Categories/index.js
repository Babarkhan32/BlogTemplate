import {Box,Grid,Typography,Chip} from '@mui/material'
import './Categories.css'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const navigate = useNavigate();
    const handleClick = (category) => {
    
      return  navigate(`/category/${category}`)
    }
    const categories = ['Sports','local','international','Bollywood','Weather','Capital','Sports','local','international','Bollywood','Weather','Capital','Sports','local','international','Bollywood','Weather','Capital']
    return(
        <Box className='cat-box' sx={{ flexGrow: 1 }}>
      <Grid style={{display:'flex',alignContent:'center',justifyContent:'center'}}container spacing={2}>
      <Typography style={{marginBottom:'40px'}} variant='h4'>Categories</Typography>
      </Grid>
      <Grid style={{display:'flex',flexWrap:'wrap'}}>
          {
              categories.map((category)=>{
            return <Chip onClick={()=>handleClick(category)} style={{width:'20%',flex:'1 0 45%',margin:'5px'}} label={category}  />  
         
              })
          }
      
      </Grid>
    </Box>
    )
}

export default Categories