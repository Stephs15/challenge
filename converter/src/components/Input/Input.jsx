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
    border: 1px solid #00564d;
    background-color: #00564d;
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

const Input = ({error, defaultCurrency, handleSelectChange, labelText, children, ...other}) => {
    return <>
        <StyledLabel>{labelText}</StyledLabel>
        <InputContainer>
            <StyledInput {...other}>{children}</StyledInput>
            <StyledSelect value={defaultCurrency} onChange={handleSelectChange}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="JPY">JPY</option>
            </StyledSelect>
            {error}
        </InputContainer>
    </>
}

export default Input
