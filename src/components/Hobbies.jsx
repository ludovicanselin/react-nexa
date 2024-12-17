function Hobbies({hobbies}) {
    return (
        <ul>
            {hobbies && hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    );
}

export default Hobbies;