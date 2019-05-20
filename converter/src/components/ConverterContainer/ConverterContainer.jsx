/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Input from '../Input'
import {testNumbers, round, fetchData} from '../../utils/utils'

const StyledError = styled.div `
    color: white;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
`

const Title = styled.h1 `
    font-size: 30px;
    color: white;
    text-align: center;
`

const Text = styled.div `
    font-size: 16px;
    line-height: 22px;
    padding: 20px 10px;
    color: #1098F7;
    border-left: 3px solid #1098F7;
    font-weight: bold;
    margin: 10px 5px;
`

const ConverterContainer = () => {
    const [currencyA, setCurrencyA] = useState('EUR');
    const [currencyB, setCurrencyB] = useState('USD');

    const [amountA, setAmountA] = useState(100);
    const [amountB, setAmountB] = useState(0);
    const [error, setError] = useState(false);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        if(currencyA !== currencyB)
            fetchData(currencyA, currencyB).then((data) => { 
                setAmountB(round(amountA * data.rates[currencyB], 2))
                setRate(round(data.rates[currencyB], 3))
            })
        else {
            setAmountB(amountA)
            setRate(1)
        }
    }, [amountA, currencyA, currencyB]);

    const handleAmountAChange = ({target}) => {
        let val = target.value
        if(testNumbers(val) || val === '') {
            setAmountA(val)
            setError(false)
        } else {
            setError(true)
        }
    }

    return <>
        <Title>Currency converter</Title>
        <Input handleSelectChange={({target}) => setCurrencyA(target.value)}
               inputId="inputA"
               value={amountA}
               onChange={handleAmountAChange}
               defaultCurrency={currencyA}
               labelText="You have"></Input>
        {error && <StyledError>Only numbers and . are allowed!</StyledError>}
        <Text>{currencyA} to {currencyB} rate is <span id="rate">{rate}</span></Text>
        <Input handleSelectChange={({target}) => setCurrencyB(target.value)}
               disabled inputId="inputB"
               value={amountB}
               defaultCurrency={currencyB}
               labelText="You get"></Input>
    </>
}

export default ConverterContainer;