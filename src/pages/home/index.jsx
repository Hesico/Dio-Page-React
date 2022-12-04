import {Link} from "react-router-dom";
import Button from "../../components/Button"

export default function Home() {
    return (<>
        <h1>Home</h1>
        <Button title="aqui" variant="2"></Button>
        <Link to="/login">Fazer Login</Link>
    </>)
}
