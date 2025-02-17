import {ReactNode} from "react";

interface Props {
    name: string;
    children: ReactNode
}

export default function MyName ({ name, children }:Props){
    return <div>
        <h1>Hello {name}!</h1>
        {children}
    </div>
}
