import React from 'react'

const Todo = () => {
    return (
        <>
            <div className="todo">
                <div className="left">
                    <input
                        className='chackbox'
                        type="checkbox"
                        name=""
                        id=""
                    />
                    <span className='todoText'>Do something Useful</span>
                </div>
                <div className="right">
                    <i id='closeButton' className="fas fa-times"></i>
                </div>
            </div>
        </>
    )
}

export default Todo