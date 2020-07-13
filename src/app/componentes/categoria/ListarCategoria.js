import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoriaServicio from '../../services/categoriaServicio'

const ListarCategoria = () => {
    const [categorias, setCategorias]           = useState([]);
    const [categoriaActual, setCategoriaActual] = useState(null);
    const [indiceActual, setIndiceActual]       = useState(-1);

    useEffect(() => {
        obtenerCategorias();
    }, [])

    const obtenerCategorias = async () => {
        const categorias = await categoriaServicio.listar()   
        setCategorias(categorias.data)
        console.log(categorias.data);
    }

    const seleccionarCategoriaActivo = (categoria, numIndice) => {
        setCategoriaActual(categoria);
        setIndiceActual(numIndice); 
        console.log(categoria);
      };

    return (
    <div className="list row">
        <div className="col-md-12">
            <div className="input-group mb-3">
                <input type="text"
                        className="form-control btn-lg"
                        placeholder="Buscar por categoria" />
                <div className="input-group-append">
                    <button className="btn btn-success"
                            type="button">  Buscar
                    </button>
                </div>
            </div>
        </div>

        <div className="col-md-12 pt-2">
            <h4>Lista de Categoria</h4>    
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias &&
                        categorias.map((categoria, numIndice) => (
                            <tr key={categoria.id}>
                                <th scope="row">{categoria.id}</th>
                                <td>{categoria.name}</td>
                                <td>{categoria.Title}</td>
                                <td>{categoria.MetaTagDescription}</td>
                            </tr> 
                        ))
                    }
                </tbody>
            </table>
            <button className="btn btn-sm btn-danger">
                Descargar
            </button>
        </div>
    </div>
    )
};

export default ListarCategoria;