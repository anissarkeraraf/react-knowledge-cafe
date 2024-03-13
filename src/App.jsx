
import './App.css'
import Blogs from './Componants/Blogs/Blogs'
import Bookmark from './Componants/Bookmark/Bookmark'
import Header from './Componants/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='lg:flex'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
