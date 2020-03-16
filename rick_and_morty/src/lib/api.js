async function getAllCharacters(){
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const parseJson = await response.json()
    return parseJson.results
}

async function getCharacterById(id){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const parsedJson = await response.json()
    return parsedJson
}

export default{
    getAllCharacters,
    getCharacterById
}