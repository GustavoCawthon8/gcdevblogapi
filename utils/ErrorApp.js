module.exports = class ErrorApp{
    static handle(res, error, status = 500, message = "Erro no servidor") {
        console.error(error);
        return res.status(status).json({ error: message });
    }
}