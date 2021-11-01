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

    const deleteItems=()=>{
        
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
                   
                    {Items.map((val)=>{
                        return (
                            <>
                            
                            <div className="todo">
                                <i className="fa fa-times" aria-hidden="true" onClick={deleteItems}></i>
                            <li>{val}</li>
                            </div>
                            </>
                        )
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}

export default List;