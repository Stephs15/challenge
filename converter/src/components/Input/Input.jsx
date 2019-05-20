import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    height: 46px;
    width: 100%;
    border-radius: 3px;
    font-size: 20px;
    padding: 5px;
    display: block;
    border: 1px solid #363636;
    background-color: #363636;
    color: white;
`

const InputContainer = styled.div `
    position: relative;
    margin-bottom: 10px;
`

const StyledSelect = styled.select `
    position: absolute;
    min-width: 60px;
    font-size: 20px;
    height: 46px;
    top: 0;
    right: 0;
    border: 1px solid #1098F7;
    background-color: #1098F7;
    color: white;
    padding: 0 5px;
    border-radius: 0 3px 3px 0;

    option {
        background-color: #363636;
        color: white;
    }
`

const StyledLabel = styled.label `
    display: block;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 5px;
`

const Input = ({inputId, defaultCurrency, handleSelectChange, labelText, children, ...other}) => {
    return <>
        <StyledLabel htmlFor={inputId} id={`${inputId}Label`}>{labelText}</StyledLabel>
        <InputContainer>
            <StyledInput id={inputId} {...other}>{children}</StyledInput>
            <StyledSelect value={defaultCurrency} onChange={handleSelectChange} id={`${inputId}Select`} aria-labelledby={`${inputId}Label`}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </StyledSelect>
        </InputContainer>
    </>
}

export default Input
