import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';

describe('Contact page ', () => {
   it('Should load contact us component', () => {
      render(<Contact />); // this will render to the JS DOM

      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
   });
   it('Should load button us component', () => {
      render(<Contact />); // this will render to the JS DOM

      const heading = screen.getByText('Send Message');
      expect(heading).toBeInTheDocument();
   });

   it('should load the plaecholder inside contact compoenent', () => {
      render(<Contact />);

      const button = screen.getByPlaceholderText('Your Name');
      expect(button).toBeInTheDocument();
   });

   it('should load input boxes inside contact component', () => {
      render(<Contact />);

      const inputBoxes = screen.getAllByRole('textbox');
      expect(inputBoxes.length).toBe(3);
   });
});
