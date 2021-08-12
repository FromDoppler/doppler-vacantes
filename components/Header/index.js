import Logo from './Logo'
import Nav from './Nav'
import Actions from './Actions'

const Header = () => {
  return (
    <header style={{ backgroundColor: '#F0F0F0' }}>
      <Logo />
      <Nav />
      <Actions />
    </header>
  )
}

export default Header
