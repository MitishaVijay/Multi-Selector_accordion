import data from "./data";
import './style.css';
import { useState } from "react"

export default function Accoridian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelect(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId===-1)
            {
                cpyMultiple.push(getCurrentId);
            }
        else cpyMultiple.splice(findIndexOfCurrentId,1);
        setMultiple(cpyMultiple); 

    }
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                MultiSelection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) =>
                            <div className="item">
                                <div  className="title" onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) 
                                                                   : () => handleSingleSelect(dataItem.id)} >
                                    <h3>
                                        {dataItem.question}
                                    </h3>
                                </div>
                                
                                {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) != -1 ?
                                        (<div className="content">{dataItem.answer}</div>)
                                        : null
                                }
                            </div>
                        ) :
                        "Item not found"
                }
            </div>
        </div>
    )
}