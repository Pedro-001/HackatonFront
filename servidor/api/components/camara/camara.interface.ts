export default interface Estacion {
    id?: number;
    marca?: String;
    modelo?: String;
    dia_colocacion?: Date;
    dia_remocion?: Date;
    latitud?: number;
    longitud?: number;
    altitud?: number;
    vegetacion?: String;
    collector?: String
}