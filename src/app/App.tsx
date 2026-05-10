import {RouterProvider} from 'react-router-dom';
import {router} from '@/app/router/router';
import {QueryProvider} from './providers/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
      <h1>Hello Team Naver</h1>
    </QueryProvider>
  );
}

export default App;
