function Hobbies({value}) {
    return (
        <ul>
            {value && value.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    );
}

export default Hobbies;