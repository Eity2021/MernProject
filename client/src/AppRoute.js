import { useRoutes } from 'react-router-dom';
import routes from './routes'; // Import the route configuration

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default AppRoutes;
