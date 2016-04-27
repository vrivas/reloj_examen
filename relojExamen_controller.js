/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Returns the hour and minutes of moment (or now) as hh:mm
 * @param {Date} moment A date
 * @returns {String} The time contained in moment as hh:mm
 */
function hhmm(moment) {
    moment = moment || new Date();
    return (((tmp = moment.getHours()) < 10) ? "0" : "") + tmp
            + ":"
            + (((tmp = moment.getMinutes()) < 10) ? "0" : "") + tmp;
}

/**
 * Returns the hour, minutes and seconds of moment (or now) as hh:mm:ss
 * @param {Date} moment A date
 * @returns {String} The time contained in moment as hh:mm:ss
 */
function hhmmss(moment) {
    moment = moment || new Date();
    return hhmm(moment) + ":" + (((tmp = moment.getSeconds()) < 10) ? "0" : "") + tmp;
}

/**
 * Returns the date, month and year of moment (or now) as dd-mm-yyyy
 * @param {Date} moment A date
 * @returns {String} Date, month and year contained in moment as dd-mm-yyyy
 */

function ddmmyyy(moment) {
    return (((tmp = moment.getDate()) < 10) ? "0" : "") + tmp
            + "-"
            + (((tmp = moment.getMonth() + 1) < 10) ? "0" : "") + tmp
            + "-"
            + moment.getFullYear();
}

var app = angular.module('rEApp', []);
app.controller('rECtrl', ['$scope', '$interval',
    function ($scope, $interval) {
        $scope.hora = hhmmss();
        $interval(function () {
            $scope.hora = hhmmss();
        }, 1000);
    
    }
]);

/*
 <script>
 var params = {'Asignatura': ''
 , 'Titulacion': ''
 , 'Fecha': ''
 , 'Aulas': ''
 , 'HoraInicio': ''
 , 'HoraFin': ''
 , 'Comentarios': ''
 };
 var firstTime = true;
 function getQueryParams() {
 qs = location.search.substring(1);
 qs = qs.split("+").join(" ");
 var params = {}, tokens,
 re = /[?&]?([^=]+)=([^&]*)/g;
 while (tokens = re.exec(qs)) {
 params[decodeURIComponent(tokens[1])]
 = decodeURIComponent(tokens[2]);
 }
 return params;
 }
 function getParams() {
 var cad = location.search.substring(1);
 if (cad.length) {
 var parejas = [];
 parejas = cad.split("&");
 for (var i = 0; i < parejas.length; ++i) {
 var par = parejas[i].split("=");
 params[par[0]] = par[1]
 .replace(/\+/g, " ")
 .replace(/%3A/g, ":")
 .replace(/%2C/g, ",");
 }
 }
 }
 function writeParams() {
 var campos = ['Asignatura'
 , 'Titulacion'
 , 'Fecha'
 , 'Aulas'
 , 'HoraInicio'
 , 'HoraFin'
 , 'Comentarios'
 ];
 for (var i = 0; i < campos.length; ++i) {
 $('#' + campos[i]).val(decodeURI(params[campos[i]]));
 }
 if ($('#Fecha').val() == "") {
 $("#Fecha").val(showDayMonthYear(new Date()));
 }
 }
 function timers() {
 var now = new Date();
 var end = new Date();
 var init = new Date();
 now.setSeconds(0, 0);
 init.setHours(eval($("#HoraInicio").val().split(":")[0]));
 init.setMinutes(eval($("#HoraInicio").val().split(":")[1]));
 init.setSeconds(0, 0);
 end.setHours(eval($("#HoraFin").val().split(":")[0]));
 end.setMinutes(eval($("#HoraFin").val().split(":")[1]));
 end.setSeconds(0);
 // Diferencia en segundos entre la hora actual y la de final
 var dif = Math.trunc((end - now) / 60000);
 //Calculamos el porcentaje para la barra de progreso
 var porc = Math.trunc(100 * (now - init) / (end - init) + 0.5);
 porc = (porc > 100) ? 100 : porc;
 // Escribimos resultados
 if (!isNaN(dif)) {
 var horas = Math.trunc(dif / 60);
 var minutos = Math.trunc(dif % 60);
 var msje = ((dif > 0) ? "Quedan " : "El tiempo acabó hace ")
 + ((horas != 0) ? (Math.abs(horas) + " horas y ") : "")
 + (Math.abs(minutos)) + " minutos";
 if (horas <= 0 && minutos <= 10) {
 $("#Quedan").css("color", "red");
 $("#PorcProgress").addClass("progress-bar-danger");
 } else {
 $("#Quedan").css("color", "inherit");
 $("#PorcProgress").removeClass("progress-bar-danger");
 }
 } else {
 var msje = "<em>Indique una hora de finalización del examen, por favor.</em>";
 $("#divDerecha").addClass("transparente");
 $("#Quedan").css("color", "inherit");
 }
 $("#HoraActual").html(showHoursMinutes(now))
 $("#PorcProgress").css("width", porc + "%");
 $("#Porcentaje").html(porc);
 $("#Quedan").html(msje);
 $("#MostrarComentarios").html($('#Comentarios').val());
 }
 function initTimers(millisecs) {
 millisecs = (typeof millisecs == 'undefined') ? 1000 : millisecs;
 if (firstTime) {
 timers();
 firstTime = false;
 }
 setInterval(timers, millisecs);
 }
 function showHoursMinutes(moment) {
 return (((tmp = moment.getHours()) < 10) ? "0" : "") + tmp
 + ":"
 + (((tmp = moment.getMinutes()) < 10) ? "0" : "") + tmp;
 }
 function showDayMonthYear(moment) {
 return (((tmp = moment.getDate()) < 10) ? "0" : "") + tmp
 + "-"
 + (((tmp = moment.getMonth() + 1) < 10) ? "0" : "") + tmp
 + "-"
 + moment.getFullYear();
 }
 </script>
 <script>
 $(function () {
 $("#Ahora").change(function () {
 if (this.value) {
 var now = new Date();
 $("#HoraInicio").val(showHoursMinutes(now));
 now.setMinutes(now.getMinutes() + eval(this.value));
 $("#HoraFin").val(showHoursMinutes(now));
 }
 });
 $("#HoraInicio").blur(function () {
 var tmp = this.value.toUpperCase();
 this.value = (tmp == "AHORA" || tmp == "'AHORA'" || tmp == "\"AHORA\"") ? showHoursMinutes(new Date()) : this.value;
 });
 $("#Fecha").blur(function () {
 var tmp = this.value.toUpperCase();
 this.value = (tmp == "HOY" || tmp == "'HOY'" || tmp == "\"HOY\"") ? showDayMonthYear(new Date()) : this.value;
 });
 $("#HoraFin").blur(function () {
 if (this.value.indexOf(":") != -1)
 return;
 var minutes = eval(this.value);
 var now = new Date();
 now.setMinutes(now.getMinutes() + minutes);
 this.value = showHoursMinutes(now);
 });
 $("#ocultar").click(function () {
 if ($('#divIzquierda').is(':hidden')) {
 $('#titulo').html("Reloj para exámenes");
 $('#divDerecha').css('width', '49%');
 $('#divIzquierda').fadeIn();
 $('#datos').fadeOut();
 $('#iconMostrar').removeClass("glyphicon-forward")
 .addClass("glyphicon-backward");
 $( "body").removeClass( "contraste");
 } else {
 $('#titulo').html($('#Asignatura').val() + ", de " + $('#HoraInicio').val() + " a " + $('#HoraFin').val());
 $('#divDerecha').css('width', '100%');
 $('#divIzquierda').fadeOut();
 $('#datos').fadeIn();
 $('#iconMostrar').addClass("glyphicon-forward")
 .removeClass("glyphicon-backward");
 $( "body").addClass( "contraste");
 }
 });
 getParams();
 writeParams();
 initTimers(2000);
 });</script>
 */