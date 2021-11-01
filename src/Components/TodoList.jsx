import React , {useState} from "react";

const List=()=>{

    const[inputList,setInputList]=useState("");
    const[Items,setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);

    }

    const addList=()=>{
setItems((oldItems)=>{
    return [...oldItems,inputList];
});
setInputList('');
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
       
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" onChange={itemEvent} value={inputList} name="" id="" placeholder="Add a Item" />
                <button onClick={addList}>+</button>
  
                <ol>
                   
                    {Items.map((val,index)=>{
                        return (
                            <>
                           <ToDoLists key={index} id={index} text={val} onSelect={deleteItems}/> 
                           
                            </>
                        )
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}


const ToDoLists=(props)=>{
    return(
        <>
         <div className="todo">
                                <i className="fa fa-times" aria-hidden="true" onClick={
                                    ()=>{
                                        props.onSelect(props.id);
                                    }
                                }></i>
                            <li>{props.text}</li>
                            </div>
        </>
    )
}
export default List;
export {ToDoLists};