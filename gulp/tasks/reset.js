import del from "del";

export const reset = () => {
	return del(app.path.clean); //задача для очистки файлов в продакшене
}