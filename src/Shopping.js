import {React,useState} from 'react'

function Shopping({data}) {
    console.log(data)

    const[val,setVal]=useState({
        PName:"",
        price:""
    })

    const[pro,setPro]=useState([
        {PName:"Laptop",price:100000,qty:1},
        {PName:"Mouse",price:500,qty:1},
        {PName:"Charger",price:1000,qty:1}
    ])

    const[ac,setAc]=useState(false)

    const[the,setThe]=useState(false)

    const[modal,setModal]=useState(false)

    function acco(){
        setAc(!ac)
    }

    function theme(){
        setThe(!the)
    }

    function add(){
        setPro([...pro,val])
    }

    return (
        <>
        <div style={{
            backgroundColor:the?"white":"black",
            color:the?"black":"white",
            height:"100vh"
        }}>

            <input
                type="text"
                placeholder="Product Name"
                value={val.PName}
                onChange={(e)=>setVal({...val,PName:e.target.value})}
            />

            <input
                type="number"
                placeholder="Price"
                value={val.price}
                onChange={(e)=>setVal({...val,price:e.target.value})}
            />

            <button onClick={add}>Add</button>

            <button onClick={theme}>
                {the?"Dark":"Light"}
            </button>


            <h2>Products</h2>

            {
                pro.map((i,index)=>{
                    return(
                        <div key={index}>
                            {i.PName} - {i.price}

                            <button>-</button>
                            {i.qty}
                            <button>+</button>

                            <button onClick={()=>setModal(true)}>
                                Remove
                            </button>
                        </div>
                    )
                })
            }


            <h2>Below 1000</h2>

            {
                pro.filter((i)=>i.price<1000).map((i,index)=>{
                    return(
                        <p key={index}>
                            {i.PName} - {i.price}
                        </p>
                    )
                })
            }


            <h2 onClick={acco}>Shopping Rules</h2>

            {
                ac?
                <p>Any bages not allowed</p>
                :""
            }


            {
                modal?
                <div>
                    <p>Are you sure you want to remove?</p>
                    <button onClick={()=>setModal(false)}>Yes</button>
                    <button onClick={()=>setModal(false)}>No</button>
                </div>
                :""
            }

        </div>
        </>
    )
}

export default Shopping