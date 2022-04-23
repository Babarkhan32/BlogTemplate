import React from 'react'
import MediaCard from "../MediaCard"
import Box from '@mui/material/Box';
import RelatedPosts from '../Posts'
import CustomButton from '../../common/Button';
const HotNews = () => {
  return (
    <Box style={{ marginTop: '20px' }} sx={{ flexGrow: 1 }}>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <MediaCard
          title={'Lizard'}
          description={`Some description about this Lizard which is found in the dangerous and cold desert of Pakistan,
       The futher investigation stated that there is some raw data about these lizards which still does not make sense. There are
       a lot of evidence regarding this specific lizard to be as dangerous as an Anaconda.Some description about this Lizard which is found in the dangerous and cold desert of Pakistan,
       The futher investigation stated that there is some raw data about these lizards which still does not make sense. There are
       a lot of evidence regarding this specific lizard to be as dangerous as an Anaconda,lizard to be as dangerous as an Anaconda.Some description about this Lizard which is found in the dangerous and cold desert of Pakistan,
       The futher investigation stated that there is some raw data about these lizards which still does not make sense`}
          image={'https://wallpaperaccess.com/full/3547002.jpg'}
          width={1000}
          isBigImage={true}
        />
      </div>
      <RelatedPosts />
      <CustomButton text={'See More'} />
    </Box>
  )
}

export default HotNews