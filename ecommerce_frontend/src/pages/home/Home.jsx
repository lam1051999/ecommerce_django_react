import React from 'react'
import Category from '../../components/Category'
import Newsletter from '../../components/Newsletter'
import SampleProduct from '../../components/SampleProduct'
import Slider from '../../components/Slider'

export default function Home() {
  return (
    <>
        <Slider />
        <Category />
        <SampleProduct />
        <Newsletter />
    </>
  )
}
