import React from 'react'

type Props = {
    value: string
    className?: string
    click: () => void
}

const Button = (props: Props) => {
    const { value, className, click } = props;
  return (
    <div
        onClick={click}
        className={['h-auto rounded-full flex items-center justify-center bg-amber-500 transition-colors cursor-pointer', className].join(' ')}>
        <span className='text-3xl font-medium'>{ value }</span>
    </div>
  )
}

export default Button