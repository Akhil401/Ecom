import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

it('should load the Header component with home button', () => {
   render(
      <BrowserRouter>
         <Provider store={store}>
            <Navbar />
         </Provider>
      </BrowserRouter>
   );
   const homeButton = screen.getByRole('link', { name: 'Home' });
   expect(homeButton).toBeInTheDocument();
});
