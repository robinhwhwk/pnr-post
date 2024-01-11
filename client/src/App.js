import './assets/tailwind.css'
import Logo from './assets/images/logo512.png'
import { SearchIcon } from '@heroicons/react/solid'

function App() {
  return (
    <div>
      <header className='flex w-full bg-dark p-2'>
        <div className="mx-4">
        <img src={Logo} alt="" className='w-8 h-8 '/>
        </div>
        <form action="" className='bg-dark-brighter px-3 flex rounded-md border border-gray-600 '>
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
          <input type="text" className='bg-dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white' placeholder='Search'/>
        </form>
      </header>
    </div>
  );
}
export default App;
