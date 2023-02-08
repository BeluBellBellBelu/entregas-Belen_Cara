import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-light">Alimento y accesorios</button>
                </a>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Perro</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>Gato</Link></li>
            <li><Link className="dropdown-item" to={"/category/3"}>Otras mascotas</Link></li>
                <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to={"/category/4"}>Juguetes y accesorios</Link></li>
            </ul>
        </li>
    );
}

export default Categorias;
