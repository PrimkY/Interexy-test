import {$RickAndMorty} from "./index";

export const fetchPage = async (num) => {
    const {data} = await $RickAndMorty.get('character/', {params: {page: num}});
    return data
}

export const fetchOneCharacter = async (id) => {
    try {
        const {data} = await $RickAndMorty.get('character/' + id)
        return [data]
    } catch (e) {
        return [e]
    }

}
