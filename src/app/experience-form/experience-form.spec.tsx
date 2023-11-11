import { render } from '@testing-library/react';

import ExperienceForm from './experience-form';

describe('DynamicForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExperienceForm />);
    expect(baseElement).toBeTruthy();
  });
});
