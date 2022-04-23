import NewsCategories from '../../components/News'
import { useSearchParams } from 'react-router-dom'
const Category = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    console.log(category) //To be used for future use
 
return(
    <div style={{margin:'0px 110px'}}>
    <NewsCategories btnCenter={true}/>
    </div>
)
}

export default Category