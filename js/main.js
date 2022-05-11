document.getElementById("header").innerHTML = `

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="col-md-5 col-5">
             <a class="navbar-brand" href="./index.html">
                <img src="./img/codoacodo.png" alt="Logo" style="width: 95px;">
                Conf Bs As
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-7 col-5 collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">La conferencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Los oradores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">El lugar y la fecha</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Conviertete en orador</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-success" href="./seccion.html">Comprar tickets</a>
                </li>
            </ul>
        </div>
    </nav>
`

document.getElementById("footer").innerHTML = `

<footer class="row mt-5 justify-content-evenly">
<ul class="nav col-lg-8 col-md-8 col-sm-12 justify-content-between text-center ">
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Preguntas </br> recuentes</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Contáctanos</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Prensa</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Conferencias</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Terminos y </br> condiciones</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Privacidad</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Estudiantes</a>
    </li>
</ul>

</footer>

`