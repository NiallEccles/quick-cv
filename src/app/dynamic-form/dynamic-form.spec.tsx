import { render } from '@testing-library/react';

import DynamicForm from './dynamic-form';

describe('DynamicForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicForm />);
    expect(baseElement).toBeTruthy();
  });
});
