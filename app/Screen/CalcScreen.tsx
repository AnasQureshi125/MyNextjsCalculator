'use client'
import React, { useState } from 'react'
import Button from '../Components/Button'
import Display from '../Components/Display'

type Props = {}

const CalcScreen = (props: Props) => {

    const [currentValue, setCurrentValue] = useState<string>('0');
    const [firstValue, setFirstValue] = useState<string>('0');
    const [operator, setOperator] = useState<string>('');
    const [isChange, setIsChange] = useState<boolean>(false);


    // Change handler
    const changeHandler = (type: string, value: string) => {
        setCurrentValue(value);
    }

    const acHandler = () => {
        setCurrentValue('0');
        setFirstValue('0');
        setOperator('');
    }

    const plusMinHandler = () => {
        setCurrentValue((Number(currentValue) * -1).toString());
    }

    const percentHandler = () => {
        if (!Number(firstValue)) {
            setCurrentValue((Number(currentValue) / 100).toString());
            return;
        }
        setCurrentValue((Number(firstValue) * Number(currentValue) / 100).toString());
    }

    const numberHandler = (value: string) => {
        if (isChange) {
            setFirstValue(currentValue);
            setIsChange(false);
            setCurrentValue(value);
            return;
        }

        setCurrentValue(previousValue => previousValue === '0' ? value: previousValue + value);
    }
    
    const operatorHandler = (value: string) => {
        
        if (operator !== '') {
            equalHandler();
            setOperator(value);
            setIsChange(true);
            return;
        }

        if (currentValue !== '0' || value === '-') {
            setCurrentValue(currentValue);
            setOperator(value);
            setIsChange(true);
            return;
        }
    }
    
    const equalHandler = () => {
        const lastNumber = parseFloat(firstValue);
        const currentNumber = parseFloat(currentValue);

        let result = 0;
        switch (operator) {
            case '+':
                result = lastNumber + currentNumber;
                break;

            case '-':
                result = lastNumber - currentNumber;
                break;

            case '*':
                result = lastNumber * currentNumber;
                break;

            case '/':
                result = lastNumber / currentNumber;
                break;
        
            default:
                return;
        }

        setCurrentValue(result.toString());
        setFirstValue(result.toString());
        setOperator('');
    }
    
    const dotHandler = () => {
        if (currentValue.includes('.')) {
            return;
        }
        setCurrentValue(currentValue + '.');
    }

  return (
    <div className='border h-full py-8 px-4 w-full flex flex-col md:h-[650px] md:w-max md:border-neutral-600 md:rounded-2xl'>Calculator
        <div className='h-44 grow flex items-end justify-end py-8 px-2 text-5xl'>
            <Display value={currentValue} />
        </div>
        <div className='w-full aspect-[4/5] grow-0 grid grid-cols-4 grid-rows-5 gap-3 md:w-72'>
            <Button value='AC' className='bg-neutral-300 text-black' click={() => acHandler()} />
            <Button value='+/-' className='bg-neutral-300 text-black' click={() => plusMinHandler()} />
            <Button value='%' className='bg-neutral-300 text-black' click={() => percentHandler()} />
            <Button value='/' className='text-white' click={() => operatorHandler('/')} />
            <Button value='7' className='bg-neutral-700 text-white' click={() => numberHandler('7')} />
            <Button value='8' className='bg-neutral-700 text-white' click={() => numberHandler('8')} />
            <Button value='9' className='bg-neutral-700 text-white' click={() => numberHandler('9')} />
            <Button value='x' className='text-white' click={() => operatorHandler('*')} />
            <Button value='4' className='bg-neutral-700 text-white' click={() => numberHandler('4')} />
            <Button value='5' className='bg-neutral-700 text-white' click={() => numberHandler('5')} />
            <Button value='6' className='bg-neutral-700 text-white' click={() => numberHandler('6')} />
            <Button value='-' className='text-white' click={() => operatorHandler('-')} />
            <Button value='1' className='bg-neutral-700 text-white' click={() => numberHandler('1')} />
            <Button value='2' className='bg-neutral-700 text-white' click={() => numberHandler('2')} />
            <Button value='3' className='bg-neutral-700 text-white' click={() => numberHandler('3')} />
            <Button value='+' className='text-white' click={() => operatorHandler('+')} />
            <Button value='0' className='col-span-2 bg-neutral-700 text-white' click={() => numberHandler('0')} />
            <Button value=',' className='bg-neutral-700 text-white' click={() => dotHandler()} />
            <Button value='=' className='' click={() => equalHandler()} />
        </div>
    </div>
  )
}

export default CalcScreen