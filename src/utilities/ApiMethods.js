import {ApiURL, path} from "./constants";

const getFromApi = (successCallback, errorCallback) => {
    fetch(`${ApiURL}/${path}`)
        .then(response => response.json())
        .then(data => {
            typeof successCallback === 'function' && successCallback(data)
        })
        .catch(errors => {
            typeof errorCallback === 'function' && errorCallback(errors)
        })
}

const postToApi = (dataToSave, successCallback, errorCallback) => {
    fetch(`${ApiURL}/${path}`, {
        method: 'POST',
        body: JSON.stringify(dataToSave),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => {
            typeof successCallback === 'function' && successCallback(data)
        })
        .catch(errors => {
            typeof errorCallback === 'function' && errorCallback(errors)
        })
}

const updateInApi = (dataToUpdate, successCallback, errorCallback) => {
    fetch(`${ApiURL}/${path}/${dataToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify(dataToUpdate),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => {
            typeof successCallback === 'function' && successCallback(data)
        })
        .catch(errors => {
            typeof errorCallback === 'function' && errorCallback(errors)
        })
}

const deleteFromApi = (idToDelete, successCallback, errorCallback) => {
    fetch(`${ApiURL}/${path}/${idToDelete}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            typeof successCallback === 'function' && successCallback(data)
        })
        .catch(errors => {
            typeof errorCallback === 'function' && errorCallback(errors)
        })
}

export {getFromApi, postToApi, updateInApi, deleteFromApi}