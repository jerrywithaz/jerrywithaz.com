import { RouteConfig } from "react-router-extended";
import Home from '@app/views/Home';

const routes: RouteConfig[] = [{
  key: 'home',
  path: '/',
  component: Home,
  secure: false,
  exact: true,
  title: 'JerryWithAZ'
}];

export default routes;