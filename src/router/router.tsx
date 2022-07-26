import Home from '../pages/home';
import CanPage from '../pages/candler';
import Chat from '../pages/chat';

const AppRouter = [
    {
        path: '/',
        component: Home,
        exact: true
    },{
        path: '/CanPage',
        component: CanPage,
        exact: true
    },{
        path:'/Chat',
        component: Chat,
        exact: true
    }
]

export default AppRouter