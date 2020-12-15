import React, { Component } from 'react'
import InfoLeft from './InfoLeft'
import InfoRight from './InfoRight'

export default class  extends Component {
    render() {
        return (
            <div className='grid'>
                <InfoLeft/>
                <InfoRight/>
                
            </div>
        )
    }
}
