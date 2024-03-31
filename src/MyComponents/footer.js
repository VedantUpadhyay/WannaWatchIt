import React from 'react'

export default function footer() {
  let footerStyle = {
      position: 'relative',
      top: '100vh',
      width: '100%'
  };

  return (
    <footer className='bg-dark text-light text-center p-2'>
      Copyright &copy; VeduBoT
    </footer>
  )
}
