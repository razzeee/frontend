
import { de, enUS } from 'date-fns/locale'

export function getLocale(language: string): Locale {
    switch (language) {
        case 'de':
            return de
        case 'en':
            return enUS
        default:
            return enUS
    }
}
