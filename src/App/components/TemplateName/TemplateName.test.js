import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateName from '../../../../grc_template/functionHooked/TemplateName';

describe('<TemplateName />', () => {
  test('it should mount,philippe', () => {
    render(<TemplateName />);
    
    const templateName = screen.getByTestId('TemplateName');

    expect(templateName).toBeInTheDocument();
  });
});