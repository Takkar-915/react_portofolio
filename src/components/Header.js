import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
    <header>
      <div className='title'>
        Harada's portofolio
      </div>

      <nav className='pc-nav'>
        <ul className='nav-elements'>
          <li><a className='nav-element' href='#profile'>My Profile</a></li>
          <li><a className='nav-element' href='#career'>Career</a></li>
          <li><a className='nav-element' href='#skills'>Skills</a></li>
          <li><a className='nav-element' href='#works'>Works</a></li>
        </ul>
      </nav>
    </header>
    </div>

  )
}

export default Header