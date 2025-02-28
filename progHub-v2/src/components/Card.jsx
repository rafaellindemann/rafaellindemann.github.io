import React, { useEffect } from 'react'
import './Card.css'

// function Card({ id, nome, categoria, descricao, link, tags }) {
function Card({r}) {

    return (
        <div className="card-container">

            <div className="card-header">
                <h2>{r.nome}</h2>
            </div>
            <div className="card-body">
                <p>{r.descricao}</p>
                <p>{r.categoria}</p>
                <p>{r.tags}</p>

                <a href={r.link} target="_blank" rel="noreferrer">Acessar recurso</a>
            </div>
        </div>
    )
}

export default Card