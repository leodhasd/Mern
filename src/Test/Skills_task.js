function Skills_task({ data }) {
    return (
        <div style={{backgroundColor: '#310998', padding: '50px', borderRadius: '5px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            <h2>My Skills</h2>

            {data.map((i) => {
                return (
                    <div key={i.id}>
                        {i.skills.map((skill, index) => {
                            return <p key={index}>{skill}</p>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Skills_task;

