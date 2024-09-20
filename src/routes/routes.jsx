import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";

export default [
    {
        name: 'home',
        path: '/',
        component: <Home/>
    },
    
    {
        name: 'restaurant',
        path: '/restaurant',
        component: <Restaurant/>
    },
    
    {
        name:'not-found',
        path:'*',
        component:<h1 className='text-center text-lg font-bold'>Page does not exist</h1>
    }
]