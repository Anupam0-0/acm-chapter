import React from 'react'
import FooterNavigation from './components/FooterNavigation'
import Header from './components/Header'
import Main from './components/Main'


const Page = () => {
  return (
    <div className='min-h-screen min-w-[100rem] bg-gradient-to-b from-blue-50 to-neutral-50 mx-auto px-max text-2xl w-full p-10 relative'>
      <Header />
      <Main />
      <FooterNavigation />
    </div>
  )
}




export default Page