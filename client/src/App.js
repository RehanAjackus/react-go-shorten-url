import {createBrowserRouter,useNavigate} from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Redirect from './Redirect';

function App({children}) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

function Render({headerEnabled,Component}){
  return(
      <div>
        {headerEnabled && <Header />}
        <Component/>
      </div>
    )
}

function Header(){
  const navigate=useNavigate()
  console.log('navigate is',navigate)
  const goTo=(name)=>{
      navigate('../'+name)
  }
  return(
    <div className='nav'>
      <div style={{cursor:'pointer'}} onClick={()=>goTo('home')}>Home</div>
      <div style={{cursor:'pointer'}} onClick={()=>goTo('about')}>About</div>
    </div>
  )
}
let routes=createBrowserRouter([
  {
    path:'/',
    element:<Render headerEnabled={true} Component={Home}/>,
  },
  {path:'/home',element:<Render headerEnabled={true} Component={Home}/>},
  {path:'/about',element:<Render headerEnabled={true} Component={About}/>},
  {path:'/bit/:url',element:<Render headerEnabled={true} Component={Redirect}/>}
])

export default routes;
