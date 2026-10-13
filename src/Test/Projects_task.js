function Projects_task({ data }) {
    return (
        <div style={{backgroundColor: '#310998', padding: '50px', borderRadius: '5px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            <h2>My Projects</h2>

            {data.map((i) => {
                return (
                    <div key={i.id}>
                        {i.projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <h3>{project.title}</h3>
                                    <p>Description : {project.description}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Projects_task;
