import { useRoutes } from 'react-router-dom';
import routes from './routes'; 

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default AppRoutes;
 