export const getStorage = (name) => {
    let data = localStorage[name]
    try{
        data = data ?  JSON.parse(data) : null
    }catch(e){
        data = null
    }
    return data
}

export const setStorage = (name,value) => {
    let data
    try{
        data = JSON.stringify(value)
    }catch(e){
        data = null
    }
    localStorage[name] = data
    return getStorage(name)
}

export const clearStorage = (name) => {
    localStorage.removeItem(name)
    return getStorage(name)
}
