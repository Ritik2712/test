import React from 'react'
import Nav from './Nav'
import Panel from './Panel'
import Panel1 from './Panel1'

export default function InfoRight() {
    return (
        <div>
            <Nav/>
            <div className='grid'>
            <Panel/>
            <Panel1/>
            </div>
        </div>
    )
}
