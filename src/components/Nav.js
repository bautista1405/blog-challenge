import React from 'react'


export default function Navbar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Blog Challenge</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                             <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                             <a class="nav-link" href="/edition-form">Formulario de Edición</a>
                            </li>
                            <li class="nav-item">
                             <a class="nav-link" href="/creation-form">Formulario de Creación</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
