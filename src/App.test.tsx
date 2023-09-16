import '@testing-library/jest-dom';
import { render, screen } from './utils/test.utils';
import App from './App';

describe('App', () => {
  it('Should render the App correctly', async () => {
    render(<App/>);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  })
})