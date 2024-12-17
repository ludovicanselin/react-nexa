function User({fullname, hobbies}) {
    return (
        <>
            {fullname.firstName} {fullname.lastName}
            <br/>
            {hobbies}
        </>
    );
}

export default User;