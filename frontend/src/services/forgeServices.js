import {mockProjects} from "../data/mockProjects"

import { api } from "./api/api";

export async function getForges() {

    try {
    const response = await api.get("/forges");

    return response.data;
    }catch(error) {
        console.log("hiba",error);
    }
}

export async function generateForge(data) {

    try {
    const response = await api.post("/generateForge",data);
       
    return response.data;
    }catch(error) {
     throw(error)
    }
}

export async function createForge(data) {
    try {
    const response = await api.post("/forges", data);

    return response.data;
    }catch(error) {
        throw(error)
    }

}

export async function updateForge(id, data) {

    const response = await api.put(`/forges/${id}`, data);

    return response.data;

}

export function getGames() {

    return mockProjects;

}

export function getGame(id) {

}

export function createGame() {

}

export function updateGame() {

}

export function deleteGame() {

}