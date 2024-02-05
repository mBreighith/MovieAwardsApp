// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';

const TestProvider = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
);

const customRender = (ui: React.ReactElement, options?: any) =>
    render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };