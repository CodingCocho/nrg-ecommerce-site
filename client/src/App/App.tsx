import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Searchbar} from '../components/Searchbar';
import {Home} from '../pages/Home';
import NRGBlackLogo from '../assets/nrg-logo-black.jpg';

function App() 
{

  return (
    <>
      <Router>
      <div 
      className="drawer"
      >
        <input 
        className="drawer-toggle" 
        id="my-drawer-3" 
        type="checkbox" 
        /> 
        <div 
        className="drawer-content flex flex-col"
        >

          {/* Navbar component container */}
          <div 
          className="w-full navbar flex items-center justify-between px-[2vw]"
          >

            {/* Mobile navbar */}
            <div 
            className="flex-none lg:hidden"
            >
              <label 
              className="btn btn-square btn-ghost"
              htmlFor="my-drawer-3"
              >
                <svg 
                className="inline-block w-6 h-6 stroke-current"
                fill="none" viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                >
                  <path
                  d="M4 6h16M4 12h16M4 18h16" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  strokeWidth="2" 
                  >
                  </path>
                </svg>
              </label>
            </div>

            {/* Website logo */}
            <img 
            alt="nrg-logo"
            className="w-[125px] h-[30px]"
            src={NRGBlackLogo}  
            />
            
            {/* Desktop Navbar */}
            <div 
            className="flex-none hidden lg:block"
            >
              <ul 
              className="menu menu-horizontal"
              >
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>

            {/* Shopping cart */}
            <div 
            className="relative"
            id="cart-container"
            >
              <Link 
              className="relative px-1 py-.5 bg-black text-white text-xs right-[-35px] top-[-13px] hover:cursor-pointer"
              to="/checkout"
              >
                4
              </Link>
              <Link
              to="/checkout"
              >
                <AiOutlineShoppingCart 
                className="text-[35px] hover:cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Hold the searchbar component */}
          <Searchbar />

          {/* Hold the routes of the application */}
          <Routes>
            <Route
            element={<Home/>}
            path="/"
            >
            </Route>
          </Routes>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul 
          className="menu w-80 bg-base-100"
          id="sidebar"
          >
            <li
            className="border-b border-slate-400 w-full pl-2 text-xl"
            >
              <Link
              className="w-fit"
              onClick={() => window.location.href="/"}
              to="/"
              >
                Home
              </Link>
            </li>
            <li
            className="border-b border-slate-400 w-full pl-2 text-xl"
            >
              <Link
              className="w-fit"
              onClick={() => window.location.href="/shop"}
              to="/shop"
              >
                Shop
              </Link>
            </li>
            <li
            className="border-b border-slate-400 w-full pl-2 text-xl"
            >
              <Link
              className="w-fit"
              onClick={() => window.location.href="/sale"}
              to="/sale"
              >
                Sale
              </Link>
            </li>
            <li
            className="border-b border-slate-400 w-full pl-2 text-xl"
            >
              <a
              className="w-fit"
              href='https://nrg-esports-gaming-site.vercel.app/'
              >
                NRG
              </a>
            </li>
            <li
            className="w-full pl-2 text-xl"
            >
              <Link
              className="w-fit"
              onClick={() => window.location.href="/contact-us"}
              to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
