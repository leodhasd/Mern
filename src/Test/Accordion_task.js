function Accordion_task({ data }) {
    return (
       <div style={{backgroundColor: '#310998', padding: '50px', borderRadius: '5px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            <h2>My Accordion</h2>

            {data.map((i) => {
                return (
                    <div key={i.id}>
                        {i.accordion.map((item, index) => {
                            return (
                                <details key={index}>
                                    <summary>{item.title}</summary>
                                    <p>{item.content}</p>
                                </details>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion_task;
