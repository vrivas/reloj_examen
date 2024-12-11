# Reloj para examen (reloj_examen)
Página web que permite mostrar en pantalla (idealmente co nun proyector de vídeo) la hora de inicio y final de un examen.

Muestra un reloj en el que indica qué hora es y cuánto falta para que el examen termine, así como una barra de progreso.

En los últimos 10 mintos, la barra de progreso se vuelve de color rojo.

Para usarlo accede a https://vrivas.github.io/reloj_examen
Ten en cuenta que los datos no se almacenan en ningún sitio, pero cuando pulsas el botón ACTUALIZAR quedan guardados en la URL, por lo que si copias y pegas esa URL en cualquier lado tendrás directamente un enlace para el examen una vez configurado. 

Puedes ver un ejemplo en https://vrivas.github.io/reloj_examen/?Asignatura=Fundamentos+de+la+Programaci%C3%B3n&Titulacion=&Fecha=11-12-2024&Aulas=&HoraInicio=08%3A45&HoraFin=10%3A20&Ahora=&Comentarios=

### Algunos trucos
* Si escribes HOY en la fecha, al salir de ese campo automáticamente se pondrá la fecha de hoy
* Si escribes AHORA en la hora de inicio, al salir de ese campo se pondrá automáticamente la hora que es
* Si escribes un solo número (por ejemplo, 120) en la hora de final, se entenderá que son los minutos que durá el examen y se calculará la hora de fin usando dichos minutos.
