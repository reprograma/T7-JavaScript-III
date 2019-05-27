const ERROR_NOT_FOUND = "Error 404 - Página não encontrada";
const SUCCESS = "OK - Dado enviado com sucesso";

let status = 404;

function getStatus(status) {
    switch (status) {
        case 404:
            return ERROR_NOT_FOUND;
            break;
        case 200:
            return SUCCESS;
            break;
        default:
            return 'invalido';
            break;
    }
}
    