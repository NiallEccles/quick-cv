import { render } from '@testing-library/react';

import EmploymentForm from './employment-form';

describe('EmploymentForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmploymentForm />);
    expect(baseElement).toBeTruthy();
  });
});
