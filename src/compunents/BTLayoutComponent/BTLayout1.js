import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import Productslide from './Productslide'
import Iphone from './Iphonee'
import Footer from './Footer'

export default class BTLayout1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Productslide />
                <Iphone />
                <Footer />
            </div>
        )
    }
}
