document.title = 'TESTAUSSERVERI';
document.querySelectorAll("nappula").forEach(nappula => {
    nappula.addEventListener("click", (e) => {
        window.open(e.target.getAttribute("kohde", '_blank')).focus();
    })
})