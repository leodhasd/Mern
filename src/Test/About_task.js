import React from 'react';

function About_task({ data }) {
    return (
        <div style={{backgroundColor: '#310998', padding: '50px', borderRadius: '5px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            {data.map((i) => {
                return (
                    <div key={i.id}>
                        <h2>About Me</h2>
                        <h3>{i.name}</h3>
                        <p>{i.role}</p>
                        <p>{i.about}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default About_task;
