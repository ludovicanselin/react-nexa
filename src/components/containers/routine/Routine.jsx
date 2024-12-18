import Button from "../../ui/buttons/Button.jsx";

function Routine() {

    function handleEat() {
        alert("Tu as mangé !");
    }

    function handleSleep() {
        alert("Tu as dormi !");
    }

    function handleStudy() {
        alert("Tu as étudié");
    }

    return (
        <>
            <Button content={"Manger"} onClick={handleEat} />
            <br/>
            <Button content={"Dormir"} onClick={handleSleep} />
            <br/>
            <Button content={"Etudier"} onClick={handleStudy} />
        </>
    );
}

export default Routine;