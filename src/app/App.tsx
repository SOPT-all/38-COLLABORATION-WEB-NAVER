import {RouterProvider} from 'react-router-dom';
import {router} from '@/app/router/router';
import {QueryProvider} from './providers/QueryProvider';

function App() {
  return (
    <RouterProvider router={router}>
      <QueryProvider>
        <h1>Hello Team Naver</h1>
      </QueryProvider>
    </RouterProvider>
  );
}

export default App;
