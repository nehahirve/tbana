import React, { useState } from 'react'
// import Header from "../components/header"
import Map from '../components/map'
import AboutButton from '../components/lovisas_about_button'
import AboutText from '../components/about_text'
import MyGraph from '../components/my_graph'

export default function Home() {
  const [aboutText, setAboutText] = useState(false)
  const [graphVisible, setGraphVisible] = useState(true)
  const [currentStation, setCurrentStation] = useState('Stockholm')

  const stationList = [
    { name: 'Stockholm', pos: { x: 73, y: 67.5 } },
    { name: 'Karlstad', pos: { x: 11, y: 67 } },
    { name: 'Malmö', pos: { x: 18, y: 94 } },
    { name: 'Göteborg', pos: { x: -7, y: 79.5 } },
    { name: 'Sundsvall', pos: { x: 73, y: 44.5 } },
    { name: 'Umeå', pos: { x: 85, y: 35 } },
    { name: 'Kiruna', pos: { x: 81, y: 8 } },
  ]

  function toggleAboutText() {
    setAboutText(!aboutText)
    setGraphVisible(!graphVisible)
  }

  function updateCurrentStation(station) {
    console.log(station)
    setCurrentStation(station)
  }

  return (
    <>
      <nav>
        <AboutButton onClick={toggleAboutText} />
      </nav>
      <main>
        <section className="map-container">
          <Map stationList={stationList} onClick={updateCurrentStation} />
        </section>
        <section className="graph-container">
          <MyGraph station={currentStation} isOpen={graphVisible} />
        </section>
      </main>
      <section className="aboutText">
        <AboutText isOpen={aboutText} />
      </section>
    </>
  )
}
