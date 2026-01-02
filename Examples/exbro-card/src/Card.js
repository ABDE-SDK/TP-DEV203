
function Card(props) {
    return (
        <>
{/* Card to practice compenent */}
            {/* <div className="card">
                <img alt='profile pic' className="card-img" src='https://avatars.githubusercontent.com/u/189775013?s=96&v=4' />
                <h2 className="card-title">Hi! I'm sidki Abderrahmane</h2>
                <p className="card-text">I'm web developer student in CMC BMK</p>
            </div> */}
{/* Card to practice props */}
            <div className="card">
                <img alt='profile pic' className="card-img" src={props.image} />
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">{props.text}</p>
            </div>
        </>
    );
}
export default Card