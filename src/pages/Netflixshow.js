import React from 'react';
import Row from '../components2/Row/Row';
import Api from "../api/api"
import Banner from '../components2/Banner/Banner';
import Nav from '../components2/Nav/Nav';

function Netflixshow() {
  return (
    <div>
     <Nav></Nav>
      <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={Api.fetchNetflixOriginals}
       isLargeRow={true}>

       </Row>
       <Row title="Trending Now" fetchUrl={Api.fetchTrending}></Row>
       <Row title="Top Rated" fetchUrl={Api.fetchTopRated}></Row>
       <Row title="Action Movies" fetchUrl={Api.fetchActionMovies}></Row>
       <Row title="Comedy Movies" fetchUrl={Api.fetchComedyMovies}></Row>
       <Row title="Horror Movies" fetchUrl={Api.fetchHorrorMovies}></Row>
       <Row title="Romance Movie" fetchUrl={Api.fetchRomanceMovies}></Row>
       <Row title="Documentaries" fetchUrl={Api.fetchDocumentaries}></Row>

    </div>
  )
}

export default Netflixshow
