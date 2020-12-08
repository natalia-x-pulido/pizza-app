import Head from 'next/head'
import {GlobalHeader, StepMenu, PizzaMaker} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Builder!</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <GlobalHeader/>
      <h1 className= "intro-slogan">Create your pizza in 3 simple steps! </h1>
      {/* <StepMenu/> */}
      <PizzaMaker/>
    </div>
  )
}
