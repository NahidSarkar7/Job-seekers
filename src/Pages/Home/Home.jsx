import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/TeamImage/team1.jpg'
import team2 from '../../assets/TeamImage/team2.png'

const Home = () => {
    return (
        <div className="hero bg-base-300 min-h-screen my-3">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <motion.img 

        animate={{
            y:[0,50,0]
        }}
        transition={{duration:5 , repeat:Infinity}}
        
      src={team1}
      className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-4 border-b-4 border-blue-600 shadow-2xl "
    />
        <motion.img 

        animate={{
            x:[0,100,0]
        }}
        transition={{duration:10 , repeat:Infinity}}
        
      src={team2}
      className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-4 border-b-4 border-blue-600 shadow-2xl "
    />
    </div>

    <div className='flex-1'>
      <h1 
      className="text-5xl font-bold">Box 
      <motion.span 
      animate={{
        color:['#6eff33','#33ffe0','#33a8ff','#3b1dfd','#b61dfd','#fd1da8','#fd1d27','#fde51d']
      }}
      transition={{duration:5 , repeat:Infinity}}
      >
        Office
        </motion.span> News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Home;