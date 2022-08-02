document.getElementById('signInBtn').addEventListener('click', validation);

function validation() {
    let userName = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    let user = validUser(userName, password);
    if (userName && password) {
        if (user) {
            createSession(user);
            window.location.href = 'home.html';
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Este usuario no existe'
            });
        }
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'info',
            title: 'Ingresa tus datos'
        });

    }
}