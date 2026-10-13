function Login_task() {
    return (
        <div style={{backgroundColor: '#310998', padding: '20px', borderRadius: '20px',color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
            <h2>Login</h2>

            <form style={{backgroundColor:'lightblue', padding: '20px', borderRadius: '20px', color: 'white',fontFamily: 'noto sans', fontSize: '20px'}}>
                <p>
                    <input type="text" placeholder="Username" style={{backgroundColor: 'white', color: 'black', border: 'none', padding: '10px', borderRadius: '20px'}} />
                </p>

                <p>
                    <input type="password" placeholder="Password" style={{backgroundColor: 'white', color: 'black', border: 'none', padding: '10px', borderRadius: '20px'}} />
                </p>

                <button style={{backgroundColor: '#222', color: 'White', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login_task;
