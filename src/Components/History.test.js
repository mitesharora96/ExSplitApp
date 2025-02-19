import { render, screen } from '@testing-library/react';
import History from './History';

test('renders learn react link', () => {
  render(<History />);
  const linkElement = screen.getByText(/History Page/i);
  expect(linkElement).toBeInTheDocument();
});
