
const buttonexcel = document.querySelector('#buttonexcel');
buttonexcel.addEventListener('click', () => {
    axios({
        url: 'http://127.0.0.1:8000/api/book/export',
        method: 'GET',
        responseType: 'blob', // importante para que sea un archivo
    })
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'books.xlsx'); // o cualquier otro nombre de archivo
        document.body.appendChild(link);
        link.click();
    })
    .catch((error) => {
        console.log(error);
    });
});
