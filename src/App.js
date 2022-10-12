 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import NoFound from './components/NoFound/NoFound';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
 

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        // {
        //   path: '/home',
        //   element: <Home></Home>
        // },
        {
          path: '/topics',
          element: <Topics></Topics>
        },

        {
          path: '/topic/:topicId',
          loader: ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element:  <TopicDetails></TopicDetails>
        },
         
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
            
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
       
        {
          path: '*',
          element: <NoFound></NoFound>
        },


      ]

    
   

    }])
  return (
    <div className='App'>
      
      <RouterProvider router={router}></RouterProvider>

  
    </div>
  );
}

export default App;
