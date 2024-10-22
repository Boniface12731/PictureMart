import Logo from '../assets/'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src='../assets/logo.png'
        alt="Picture Mart"
        className="w-36" />
    </div>
  )
}
export default NavBar
