interface Props {
    age: number;
}

export default function MyAge ({ age }:Props){
    return <h1>My age: { age }</h1>
}
