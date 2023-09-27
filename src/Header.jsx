import './Header.css'
import './App.css'

function Header() {
  return (
    <div className='header-container max-width mx-auto'>
      <button>ME Board Exam</button>
      <div className='header-right-container'>
        <button>About</button>
        <button>Sign In</button>
        <button>dark mode icon</button>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Header
