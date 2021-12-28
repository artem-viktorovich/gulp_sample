//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

//Информация о пути к тому или иному файлу или папке
 export const path = {
	 build: {
		files: `${srcFolder}/files/`,
	 src: {
		 files: `${srcFolder}/files/**/*.*`, //все файлы  папки и их перенос
	 },
	 watch: {
		 files: `${buildFolder}/files/**/*.*`
	 },
	 clean: buildFolder,
	 buildFolder: buildFolder,
	 srcFolder: srcFolder,
	 rootFolder: rootFolder,
	 ftp: '',
 }
}