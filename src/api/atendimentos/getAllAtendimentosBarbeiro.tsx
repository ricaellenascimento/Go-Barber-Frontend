import api from "../http-common";

export async function getAllAtendimentosBarbeiro(barberId: number){
    return api.get(`/appointments/barber/${barberId}`);
}