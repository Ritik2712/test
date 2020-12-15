import React from 'react'

export default function Header() {
    return (
        <div className='header'>
        <div className='grid info'>
            <div className='left'>
                <img src='images/beard.jpg' alt='beard guy'/>
            </div>
            <div className='right'>
                <h1>Ritik<br/>Mahajan</h1>
                <div className='heading status'>Web developer fresher</div>
                <p>Adres: B-5/315-316 3rd flr Sec-5 Rohini Delhi 110085</p>
            </div>            
        </div>
        <div className='grid intro'>
            <div className='left'>
                <h3 className='heading'>Profssion <br/><span>sss</span>Profile</h3>
            </div>
            <div className='right'>
                I am currently percuing my BCA degree in first year. I have learnt skill of web development from youtube and Udemy. I am seeking internships that will make best use my skills and allow me to develop them further I am detrmined and enthusiastic I have developed good planning
            </div>
        </div>
        </div>
    )
}
