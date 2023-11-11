import { render } from '@testing-library/react';

import FormikForm from './formik-form';

describe('FormikForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormikForm />);
    expect(baseElement).toBeTruthy();
  });
});
