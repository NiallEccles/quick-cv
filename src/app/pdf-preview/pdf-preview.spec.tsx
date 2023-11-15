import { render } from '@testing-library/react';

import PdfPreview from './pdf-preview';

describe('PdfPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfPreview />);
    expect(baseElement).toBeTruthy();
  });
});
