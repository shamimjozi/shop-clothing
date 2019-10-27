import  React from 'react' ;
import {withRouter} from 'react-router-dom' ;
import './menu-item.styles.scss' ;

const MenuItem = ({ title , imageUrl , size , history ,linkUrl , match}) =>(

    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image' style={{
            backgroundImage : `url(${imageUrl})`
        }}  />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
</div>


)
 
export default withRouter(MenuItem);

/*when we use withRouter(is a function) we give our component this power that
accsess the to the props: history , location , match and so on */

//match.url => contain the components url that already have
