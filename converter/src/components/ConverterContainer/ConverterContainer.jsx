/* eslint-disable react-hooks/exhaustive-deps*/
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Input from '../Input'
import {testNumbers, round, fetchData} from '../../utils/utils'

const StyledError = styled.div`
    color: white;
    font-size: 20px;
    line-heigth: 20px;
    text-align: center;
    border-radius: 3px;
    background-color: #00564d;
    padding: 10px;
    margin-bottom: 10px;
`

const Title = styled.h1 `
    font-size: 30pxl
    color: white;
    text-align: center;
`

const ConverterContainer = () => {
    const [currencyA, setCurrencyA] = useState('EUR');
    const [currencyB, setCurrencyB] = useState('USD');

    const [amountA, setAmountA] = useState(100);
    const [amountB, setAmountB] = useState(0);
    const [error, setError] = useState(false);
    const [changedFromFetch, setChangedFromFetch] = useState(false);

    useEffect(() => {
        if(!changedFromFetch) {
            setChangedFromFetch(true)
            if(currencyA !== currencyB)
                fetchData(currencyB, currencyA).then((data) => {
                    setAmountA(round(amountB * data.rates[currencyA], 2))
                    // setAmountA((amountB * data.rates[currencyA]).toFixed(2))
                    setChangedFromFetch(false)
                })
            else {
                setAmountB(amountA)
                setChangedFromFetch(false)
            }
        }
    }, [amountB]);
    
    useEffect(() => {
        if(!changedFromFetch) {
            setChangedFromFetch(true)
            if(currencyA !== currencyB)
                fetchData(currencyA, currencyB).then((data) => { 
                    setAmountB((amountA * data.rates[currencyB]).toFixed(2))
                    setChangedFromFetch(false)  
                })
            else {
                setAmountB(amountA)
                setChangedFromFetch(false)
            }
        }
        
        
    }, [currencyA, amountA, currencyB]);

    const handleAmountAChange = ({target}) => {
        let val = target.value
        if(testNumbers(val) || val === '') {
            setAmountA(val)
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleAmountBChange = ({target}) => {
        let val = target.value
        if(testNumbers(val) || val === '') {
            setAmountB(val)
            setError(false)
        } else {
            setError(true)
        }
    }

    return <>
        <Title>Currency converter</Title>
        {error && <StyledError>Only numbers and . are allowed!</StyledError>}
        <Input handleSelectChange={({target}) => setCurrencyA(target.value)}
               value={amountA}
               onChange={handleAmountAChange}
               defaultCurrency={currencyA}
               labelText="You have"></Input>
        <Input handleSelectChange={({target}) => setCurrencyB(target.value)}
               value={amountB}
               onChange={handleAmountBChange}
               defaultCurrency={currencyB}
               labelText="You get"></Input>
    </>
}

export default ConverterContainer;