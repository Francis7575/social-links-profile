import avatar from '/src/assets/avatar-jessica.jpeg';
const Content = () => {
    return (
        <>
            <main className='main_container'>
                <figure>
                <img className="avatar" src={avatar} alt="avatar-image"/>
                </figure>
                <h1>Jessica Randall</h1>
                <h2>London, United Kingdom</h2>
                <h3>"Front-end developer and avid reader."</h3>
                <ul>
                    <li>
                        <a href="https://github.com/dashboard" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                    </li>
                </ul>
            </main>
        </>
    )
}
export default Content