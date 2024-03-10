

const Result = () => {
    const marks = 60;
    return (
        <div>
            {marks >= 80 ? <h3>Brilliant Result</h3> : <h3>Average Result</h3> }
        </div>
    );
};

export default Result;