import { Torneos } from './torneos';

export interface Respuestat {
    codigo: number;
    mensajeE: string;
    
    torneos:Torneos[];
}
