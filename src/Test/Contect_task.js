function Contect_task({ data }) {
    return (
        <div style={{backgroundColor: '#310998', padding: '50px', borderRadius: '5px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            {data.map((i) => {
                return (
                    <div key={i.id}>
                        <h2>Contact Me</h2>
                        <p>Email: {i.email}</p>
                        <p>Contact: {i.contact}</p>

                        <p >
                            GitHub:
                            <a style={{color:"red"}} href={i.social?.github}>
                                {i.social?.github}
                            </a>
                        </p>

                        <p>
                            LinkedIn:
                            <a style={{color:"red"}} href={i.social?.linkedin}>
                                {i.social?.linkedin}
                            </a>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Contect_task;
