export default [
    {
        name: 'home',
        path: '/',
        component: <h1 className='font-bold text-lg text-center'>Restaurant page home</h1>
    },
    {
        name:'not-found',
        path:'*',
        component:<h1 className='font-bold text-lg text-center'>Page does not exist</h1>
    }
]