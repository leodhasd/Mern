import React from 'react';

const Object=()=>{
    const student=[{
        id:1,
        name:"Meg",
        dept:"CSE",
        age:19,
        mark:100
    },
        { id:2,
        name:"parthi",
        dept:"cse",
        age:21,
        mark:99 }

]

    const data = student.map((i)=>{
        return(
            <>
        {i.name}
        </>
        )
    })
    console.log(data);

    const num=[58,36,65,16]
    const filterd=num.filter(
        function (x) {
            return x>35 && x<60
        }
    )
    console.log(filterd);

    const datamark=student.filter((i)=>i.mark>90)
    console.log(datamark)

    const frnds=["sanjay","pradeep","kows","rahul","siva"]
    const result=frnds.splice(2,3,"Nis")
    console.log(result)
    const res=frnds.slice(4)
    console.log(res)


    return(
        <>
                <table>
                        <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>dept</th>
                        <th>Mark</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Meg</td>
                            <td>19</td>
                            <td>CSE</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>parthi</td>
                            <td>19</td>
                            <td>CSE</td>
                            <td>92</td>
                        </tr>
                </table>



                {datamark.map((i)=>{
                    return(
                        <>
                        {i.name}
                        </>
                    )
                })}
        </>
    )
}

export default Object;