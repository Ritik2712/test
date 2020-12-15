import React from 'react'

export default function InfoLeft() {
    return (
        <div className='infoLeft'>
            <h2 className='heading cantact'>contact</h2>
            <div className='grid2'>
                <div className='grid3 ico'>
                    <div>
                    <h4>Phone</h4>
                    <a href="tel:8920536788">8920536788</a>
                    </div>
                    <i class="fa fa-phone"></i>
                </div>
                <div className='grid3 ico'>
                    <div>
                    <h4>Email</h4>
                    ritik2712mahajan@gmail.com
                    </div>
                    <i class="fa fa-envelope"></i>
                </div>
                <div className='grid3 ico'>
                    <div>
                    <h4>Website</h4>
                    <a href='https://github.com/Ritik2712'>https://github.com/Ritik2712</a>
                    </div>
                    <i class="fa fa-mouse-pointer"></i>
                </div>
                <div className='grid3 ico'>
                    <div>
                    <h4>B-5/315-316 Sec-5</h4>
                    <h4>Rohini Delhi 110085</h4>
                    </div>
                    <i class="fa fa-home"></i>
                </div>
            </div>
                <h2 className='heading education'>
                    education
                </h2> 
            <div className='grid2 '>
                <div>
                <h3>High Schoolgraduation</h3>
                <p>Vidya Jain Public School 2019</p>
                </div>
                <div>
                <h3>Bachalres of Computer Application </h3>
                <p>Vivekanda Institute Of Proffesional Studies(pursuing)</p>
                </div>
            </div>
            <h2 className='heading skills'> Technical Skills</h2>
            <div className='grid2'>
                <div className='grid3'>
                    <progress value='75' max='100'></progress>
                    <p>HTML</p>
                </div>
                <div className='grid3'>
                    <progress value='75' max='100'></progress>
                    <p>CSS</p>
                </div>
                <div className='grid3'>
                    <progress value='50' max='100'></progress>
                    <p>JAVASCRIPT</p>
                </div>
                <div className='grid3'>
                    <progress value='60' max='100'></progress>
                    <p>REACT</p>
                </div>
            </div>
            
        </div>
    )
}
