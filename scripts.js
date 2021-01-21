function modalActivate(modalid) {
    const modal = document.getElementById(modalid);
    modal.classList.add('is-active');
}

function modalDeactivate(modalid) {
    const modal = document.getElementById(modalid);
    modal.classList.remove('is-active');
}