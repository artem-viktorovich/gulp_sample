import replace from "gulp-replace"; 
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";

export const plugins = {
	replace: replace, //обработка картинок
	plumber: plumber, //
	notify:notify, //сообщения об ошибках
	browsersync:browsersync
}