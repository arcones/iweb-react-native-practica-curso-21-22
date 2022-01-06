import AsyncStorage from '@react-native-async-storage/async-storage';

export const FINISHED_EMOJIS = Array("champagne", "tada", "rocket", "ballon", "mega", "bell", "black_joker", "confetti_ball")
export const APPBAR_EMOJI_KEY_FINISHED = '@NativeGames:AppBarEmojiFinished'

export const UNFINISHED_EMOJIS = Array("battery", "performing_arts", "bowling", "brain", "bell", "construction", "bomb")
export const APPBAR_EMOJI_KEY_UNFINISHED = '@NativeGames:AppBarEmojiUnfinished'

let initialized = false

export const getNextEmojiIfLastWasPresentOrFallback = async (key, emojiSet) => {
    let lastEmoji = await _getLastEmoji(key)
    let nextEmoji
    if (lastEmoji) {
        let lastIndex = emojiSet.indexOf(lastEmoji)
        nextEmoji = emojiSet[(lastIndex + 1) % emojiSet.length]
        _saveLastEmoji(key, nextEmoji)
    } else {
        nextEmoji = emojiSet[0]
        _saveLastEmoji(key, nextEmoji)
    }
    return nextEmoji
}

export const _initEmojis = async () => {
    if (!initialized) {
        _saveLastEmoji(APPBAR_EMOJI_KEY_FINISHED, JSON.stringify(FINISHED_EMOJIS[0]))
        _saveLastEmoji(APPBAR_EMOJI_KEY_UNFINISHED, UNFINISHED_EMOJIS[0])
        initialized = true
    }
}

const _saveLastEmoji = async (key, lastEmoji) => {
    try {
        await AsyncStorage.setItem(key, lastEmoji);
    } catch (error) {
        console.log(`There was a problem saving last emoji:\n ${error}`)
    }
}

const _getLastEmoji = async (key) => {
    try {
        let lastEmoji = await AsyncStorage.getItem(key)
        return lastEmoji
    } catch (error) {
        console.log(`There was a problem retrieving last emoji, falling back to first of list:\n ${error}`)
    }
}