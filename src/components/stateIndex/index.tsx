import styles from "./stateIndex.module.css"

interface Props {
    index: number;
    setIndex: (value: number) => void;
}

export default function StateIndex({index, setIndex}:Props) {


    function handleClick()
    {
        setIndex(index + 1);
    }

    return (
        <div>
            <h4>{index}</h4>
            <button onClick={handleClick} className={styles.button}>Click</button>
        </div>
    )
}
