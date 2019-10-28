import React from 'react' ;
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

//we use function because we don't need any cycle methodts or don't want to store s.th;

 const HomePage = () => (
    <div className='homepage'>
       <Directory />
    </div>
)

export default HomePage ;