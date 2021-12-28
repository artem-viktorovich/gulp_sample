import gulp from "gulp";

import { path } from "./gulp/config/path.js";

//Передаем объект в глобальную переменную
global.app = {
	path: path,
	gulp: gulp
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";

//Наблюдатель
function watcher() {
	gulp.watch(path.watch.files, copy)
}

//Построение сценариев выполнения задач

const dev = gulp.series(copy, watcher);


//Выполнение сценария по умолчанию

gulp.task('default'.dev);