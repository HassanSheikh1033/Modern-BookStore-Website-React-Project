import React from 'react'
import Header from '../components/Header/Header'
import Brands from '../components/Brands/Brands'
import FeaturesBooks from '../components/FeaturesBooks/FeaturesBooks'
import BestSellingBooks from '../components/BestSellingBooks/BestSellingBooks'
import PopularBooks from '../components/PopularBooks/PopularBooks'
import Quote from '../components/Quote/Quote'
import LatestArticle from '../components/LatestArticle/LatestArticle'


const Home = () => {
  return (
    <>
      <Header />
      <Brands/>
      <FeaturesBooks/>
      <BestSellingBooks/>
      <PopularBooks/>
      <Quote/>
      <LatestArticle/>
    </>
  )
}

export default Home