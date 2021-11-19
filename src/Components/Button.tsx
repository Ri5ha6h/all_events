import { FC } from 'react'

interface ButtonProps{
    list: ()=> void;
    grid: ()=> void;
}

const Button:FC<ButtonProps> = ({list, grid}) => {
    return (
        <div className='flex mt-4 space-x-5'>
        <button
          className='px-4 py-2 text-blue-500 border border-blue-500 rounded-md outline-none hover:bg-blue-500 hover:text-white'
          type='button'
          onClick={list}
        >
          List View
        </button>
        <button
          className='px-4 py-2 text-blue-500 border border-blue-500 rounded-md outline-none hover:bg-blue-500 hover:text-white'
          type='button'
          onClick={grid}
        >
          Grid View
        </button>
      </div>
    )
}

export default Button
