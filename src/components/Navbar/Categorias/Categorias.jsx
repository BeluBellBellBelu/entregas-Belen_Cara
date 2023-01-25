

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-light">Alimento y accesorios</button>
                </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Perro</a></li>
                <li><a className="dropdown-item" href="#">Gato</a></li>
                <li><a className="dropdown-item" href="#">Otras mascotas</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Juguetes y accesorios</a></li>
            </ul>
        </li>
    );
}

export default Categorias;
