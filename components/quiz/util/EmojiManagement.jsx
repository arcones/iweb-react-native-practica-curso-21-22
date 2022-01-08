import AsyncStorage from '@react-native-async-storage/async-storage';

const EMOJIS = Array("battery", "performing_arts", "bowling", "brain", "bell", "construction", "bomb", "champagne", "tada", "rocket", "balloon", "mega", "bell", "black_joker")
const KEY = '@NativeGames:AppBarEmoji'

export const getNextEmojiIfLastWasPresentOrFallback = async () => {
    let lastEmoji = await _getLastEmoji(KEY)
    let nextEmoji
    if (lastEmoji) {
        let lastIndex = EMOJIS.indexOf(lastEmoji)
        nextEmoji = EMOJIS[(lastIndex + 1) % EMOJIS.length]
        _saveLastEmoji(KEY, nextEmoji)
    } else {
        nextEmoji = EMOJIS[0]
        _saveLastEmoji(KEY, nextEmoji)
    }
    return nextEmoji
}

const _saveLastEmoji = async (KEY, lastEmoji) => {
    try {
        await AsyncStorage.setItem(KEY, lastEmoji);
    } catch (error) {
        console.err(`There was a problem saving last emoji:\n ${error}`)
    }
}

const _getLastEmoji = async (KEY) => {
    try {
        let lastEmoji = await AsyncStorage.getItem(KEY)
        return lastEmoji
    } catch (error) {
        console.err(`There was a problem retrieving last emoji, falling back to first of list:\n ${error}`)
    }
}