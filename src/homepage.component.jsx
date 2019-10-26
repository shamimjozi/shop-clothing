import React from 'react' ;
import './homepage.styles.scss';

//we use function because we don't need any cycle methodts or don't want to store s.th;

 const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
           
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hat</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
           
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jacket</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sneakers</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Womens</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Mens</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

        </div>
    </div>
)

export default HomePage ;