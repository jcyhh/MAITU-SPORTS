const langKey: string = 'LANG' // 存储多语言的KEY

// 存储多语言
export const setLang = (data: string): void => localStorage.setItem(langKey, data)
export const getLang = (): string => localStorage.getItem(langKey) || 'en'
export const delLang = (): void => localStorage.removeItem(langKey)