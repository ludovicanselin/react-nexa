function Player() {

    let score = Math.round(Math.random() * 100);

    return (
        <>
            {score > 50 ? <p>Tu as gagné. Score : {score}</p> : <p>Tu as perdu. Score : {score}</p>}
        </>
    );
}

export default Player;