import React from 'react'
import "../css/HomeScreen.css"
import Nav from '../Component/Nav'
import Banner from '../Component/Banner'
import Row from '../Component/Row'
import requests from '../api/request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav></Nav>
      <Banner></Banner>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}></Row>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  )
}

export default HomeScreen