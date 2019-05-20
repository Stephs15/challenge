import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import {render, fireEvent, cleanup, prettyDOM} from 'react-testing-library'
import {axe, toHaveNoViolations} from 'jest-axe'
import ConverterContainer from './ConverterContainer';

expect.extend(toHaveNoViolations)

describe('Converter Container', () => {

    afterEach(cleanup)

    it('Should pass accessibility standards without violations', async () => {
        const html = ReactDOMServer.renderToString(<ConverterContainer />);
        const results = await axe(html);    
        expect(results).toHaveNoViolations(); 
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConverterContainer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("App loads input as 100 for the initial state", () => {
        const { container } = render(<ConverterContainer />);
        const inputValue = container.querySelector('#inputA');
        expect(inputValue.value).toBe("100");
    });

    it("Rate is set to 1 when currencies are the same", () => {
        const { container } = render(<ConverterContainer />);
        const inputValue = container.querySelector('#inputASelect');

        fireEvent.change(inputValue, { target: { value: 'USD' } });

        const rate = container.querySelector('#rate');
        const inputB = container.querySelector('#inputB');
        expect(rate.textContent).toBe('1');
        expect(inputB.value).toBe('100');
    });
});