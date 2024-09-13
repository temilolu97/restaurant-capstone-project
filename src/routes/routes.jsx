import Home from "../pages/Home";

export default [
    {
        name: 'home',
        path: '/',
        component: <Home/>
    },
    {
        name:'not-found',
        path:'*',
        component:<h1 className='font-bold text-lg text-center'>Page does not exist</h1>
    }
]