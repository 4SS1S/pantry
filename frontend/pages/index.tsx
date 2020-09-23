import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3434');

    socket.on('news', (data) => {
      setData(data.hello)
      socket.emit('my other event', { my: 'data' });
    });
  }, [])

  return (
    <div>
      HELLO 
      <motion.div
        exit={{ 
          x: 100,
          opacity: 0
         }}
        initial={{ 
          x: 100,
          opacity: 0
         }}
        animate={{ 
          y: 0,
          x: 0,
          opacity: 1
         }}
        transition={{
          duration: .3
        }}
        >
        {data}
      </motion.div>

      <Link href="/teste">
        Teste
      </Link>
    </div>
  )
}

export default Home