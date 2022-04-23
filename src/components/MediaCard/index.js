import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useWindowSize from '../../Hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
export default function MediaCard({title,description,image,width,height,display,isBigImage}) {

  const windowSize = useWindowSize();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product-detail')
  }
  return (
    <Card onClick={handleClick} style={{marginBottom:'20px', ...(isBigImage && { height: '98%' }),}} sx={{ maxWidth: width }}>
      
    
       <Grid container spacing={2}>
        <Grid item xs={ display==='verticle' && windowSize.width<'910'?12:display==='verticle' && windowSize.width>'910'?4:12}>
        <CardMedia
        component="img"
        style={{height:'100%',width:'100%'}}
        height={ windowSize.width<'910' && display==='verticle' ? '70%' : height}
       sx={4}
        image={image}
        alt=''
      />
        </Grid>
        <Grid item   xs={display==='verticle' && windowSize.width>'910'?8 : display==='verticle' && windowSize.width<'910'?12:12}>
        <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography  style={{fontSize: windowSize.width<'910'?'12px':'14px'}}  align={'justify'}  >
         {description}
        </Typography>

      
      </CardContent>
        </Grid>
      </Grid>
      
    </Card>
  );
}

