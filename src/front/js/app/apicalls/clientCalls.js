import React from "react";

export const createClient = async (client) => {
    const body = JSON.stringify(client);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/new_client`, options)
    const data = await response.json();
    await console.log(data)
    return data;
}

export const getAllClients = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/clients`, options)
    const data = await response.json();
    await console.log(data)
    return data;
}

export const getClient = async (clientID) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/clients/${clientID}`, options)
    const data = await response.json();
    await console.log(data)
    return data;
}



//Misc Calls

export const fetchStates = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/states`, options)
    const data = await response.json();
    await console.log(data)
    return data;
}


export const fetchCities = async (state) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`${process.env.BACKEND_URL}/api/${state}/cities`, options)
    const data = await response.json();
    await console.log(data)
    return data;
}