import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const Stars = () => {
  return (
    <div>Stars</div>
  )
}


const StarsCanvas =()=>{
  <div className='w-full h-full absolute insert-0 z-[-1]'>
    <Canvas camera={{position:[0,0,1]}}>
      <Suspense fallback={null}>
        <Stars>
          
        </Stars>

      </Suspense>

    </Canvas>

  </div>
}
export default Stars