export const useFecha = (fechaLargeFormat) => {
    const fecha = new Date(fechaLargeFormat);
    const dia = fecha.getDay();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear(); 

    const fechaShortFormat = `${dia}/${mes}/${anio}`;

    return fechaShortFormat;
}
