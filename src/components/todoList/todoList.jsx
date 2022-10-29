import React from 'react'
import styles from './todoList.module.css'

class TodoList extends React.Component{
    state={
        taskName:'',
        taskList:[]
    }
    handleChange = (e)=>{
        this.setState({taskName:e.target.value})
    }
    handleClick =()=>{
        let task = [...this.state.taskList]
        task.push(this.state.taskName)
        this.setState({
            taskName:'',
            taskList:task
        })
    }
    
    handleDelete = (index)=>{
        let task = [...this.state.taskList]
        task.splice(index,1)
        this.setState({
            taskList:task
        })
    }
    handleUpdate =(e,index)=>{
        let task = [...this.state.taskList]
        task.splice(index,1,e.target.value)
        this.setState({
            taskList:task
        })
    }
    render(){
        return(
            <div className={styles.container}>
                <h1>Todo list!!</h1>   
                <div>
                    <input 
                    type='text' 
                    placeholder='Enter new task'
                    onChange={(e)=>this.handleChange(e)}
                    value={this.state.taskName}
                    />
                    <button
                    onClick={this.handleClick}>
                        Insert task
                    </button>
                </div> 
                <div>
                    <ol>
                        {
                            this.state.taskList.length > 0 ? 
                            this.state.taskList.map((task,index) =>
                            <li>
                                <span>{task}</span>
                                <input type="text" 
                                placeholder='Enter new updated task..' 
                                onChange={(e)=>this.handleUpdate(e,index)}
                                />
                              
                                <button
                                    onClick={()=>this.handleDelete(index)}
                                    >
                                    Delete task
                                    </button>
                                </li>)
                            : ''
                        }
                    </ol>
                </div>
                {/* <p>State:{JSON.stringify(this.state)}</p>       */}
            </div>
        )
    }
}

export default TodoList;