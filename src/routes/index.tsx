import IRoute from '../interfaces/IRoute'
import Cart from '../pages/Cart'
import Home from '../pages/Home'

const mainRoutes: IRoute[] = [
   {
      path: '/',
      auth: false,
      name: 'Home',
      component: Home,
   },
   {
      path: '/cart',
      auth: false,
      name: 'Cart',
      component: Cart,
   },
]

const routes: IRoute[] = [...mainRoutes]

export default routes
