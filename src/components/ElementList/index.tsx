
interface Props {
    name: string;
    isPacked: boolean;
}

export default function ElementList({name, isPacked}:Props) {
    if (isPacked)
    {
        return <li>{name} ✅</li>
    }

    return <li>{name}</li>
}
