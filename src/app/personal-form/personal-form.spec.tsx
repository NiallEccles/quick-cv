import { render } from '@testing-library/react';

import PersonalForm from './personal-form';

describe('PersonalForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonalForm />);
    expect(baseElement).toBeTruthy();
  });
});
