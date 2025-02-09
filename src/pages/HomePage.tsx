import React from 'react'
import NavBar from '../components/common/NavBar';

const HomePage:React.FC = () => {
  return (
    <div className='bg-primary-background min-h-screen flex flex-col items-center'>
      <NavBar />
    </div>
  )
}

export default HomePage;
