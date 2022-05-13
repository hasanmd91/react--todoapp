import React, { useState } from 'react'

import style from './newtodo.module.css'

 const Newtodo = (props) => {

    const[todo, setTodo] = useState( {title:"", desc:""} )
    const {title,desc} = todo;

    const handelChange = (e) => {
       const name = e.target.name 
        setTodo((previousState)=>{
            return{ ...previousState, [name]: e.target.value} 
        })
    }
    const handelSubmit= (e) =>{
        e.preventDefault()
        props.onAddTodo(todo)
        setTodo({title:"", desc:""}) }

    return (
        <form className={style.form} onSubmit={handelSubmit}>
    
            <div className={style["form-Field"]}>
                <label className={style["form-Field-label"]}  
                htmlFor='title'>Title: </label>

                <input className={style["form-Field-input"]}  
                type="text" 
                id='title' 
                name='title'
                value={title}
                onChange={handelChange}/>
                
            </div>

            <div className={style["form-Field"]} >
                <label className={style["form-Field-label"]}
                 htmlFor='description'>desc: </label>

                <input className={style["form-Field-textarea"]} 
                 type="textarea" 
                 id='desc' 
                 name='desc'
                 value={desc}
                 onChange={handelChange}/>

            </div>

            <button  className={style["form-button"]} type='submit'>Add todo</button>   
            
        </form>
      )
    }

export default Newtodo