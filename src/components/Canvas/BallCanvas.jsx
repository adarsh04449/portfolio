import { Suspense } from "react"
import React from 'react'
import {Canvas} from "@react-three/fiber"
import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei"

import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed = {1.75} rotationIntensity= {1}
      floatIntensity={2}
      >
      <ambientLight intensity = {0.25} />
      <directionalLight position={[0,0,0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args = {[1,1]} />
        <meshStandardMaterial 
          color="#4075A0"
          polygonOffset
          polygonOffsetFactor={2}
          floatShading
        />
        <Decal 
          position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatshading
          map = {decal}
        />
      </mesh>
      
      </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas