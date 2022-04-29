import React from 'react'
import {Fade} from 'react-reveal'
import './Dress.scss'



const Dress = () => {
    return (
        <div className='featured'>
            <Fade top>
            <h1 className='featured-text'>Our Most Popular Categories</h1>
            </Fade>
            <Fade bottom>
            <p className='featured-text'>BE THE BEST DRESSED GUEST</p>
            </Fade>
            <div className='container'>
                <Fade left>
                <img className='span-3 image-grid-row-2' src='https://images.unsplash.com/photo-1502727135886-df285cc8379f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' />
                </Fade>
                <Fade right>
                <img src='https://images.unsplash.com/photo-1557363763-8381968f8353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='' />
                <img src='https://images.unsplash.com/photo-1580824455946-7598b9a08424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' />
                <img src='https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob3RvZ3JhcGh5JTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt='' />
                <img src='https://images.unsplash.com/photo-1585556282289-d4d5a7967936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='' />
                </Fade>
                <div className='span-3 img-details'>
                    <div className='top'>
                        <Fade bottom>
                        <h2>Say Yes...</h2>
   
                      
                        <p className='price'>Price Range $399-$1,599</p>
                        </Fade>
                    </div>
                    <div className='info-grid'>
                        <div>
                           
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <Fade bottom>
                    <p>...to the perfect dress! Find wedding gowns, bridesmaid dresses, and mother-of-the-bride dresses in the Wedding Shop, along with shoes and accessories to match. </p>
                    </Fade>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <Fade left>
                <img className='order-2' src='https://images.unsplash.com/photo-1612883695890-f2ab22e65215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' />
                <img className='order-3' src='https://images.unsplash.com/photo-1501699169021-3759ee435d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' />

                <img className='span-3 image-grid-row-2 order-1' src='https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' />


                <img className='order-4' src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBob3RvZ3JhcGh5JTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt='' />
                <img className='order-5' src='https://images.unsplash.com/photo-1641251950964-48f145d5616b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxwaG90b2dyYXBoeSUyMHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt='' />
                </Fade>

                <div className='span-2 right-img-details order-7'>
                    <Fade right>
                     <p>Prepare for dinner parties, holiday gatherings, and more. Find the perfect dining and entertaining pieces to reflect the style of the life you're building together.</p>
                     </Fade>
                </div>


                <div className='span-3 img-details order-6'>
                <Fade bottom>
                    <div className='top'>
                        <h2>Start with the Basics</h2>
                        <p>Bedding, towels, and cookware are essential for every newlywed couple.</p>
                        <p className='price'>Package Price: $399-$2,999</p>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className='info-grid'>
                        <div>
                        
                            <div className='info'>
                            
                                <p className='bold'>We Cater</p><p>365 days</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>We Do Makeup</p><p>$299-$1,299</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Media Service</p><p>$1,599</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>All-in-Package</p><p>$15,999</p>
                            </div>
                         
                        </div>
                    </div>
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Dress