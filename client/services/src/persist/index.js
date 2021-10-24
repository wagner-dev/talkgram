import { setCookie, parseCookies } from 'nookies'

export const persistCookie = (ctx, name, data, optionsForm) => {
    const optionsDefault = {
        maxAge: 86400 * 30,
        path: '/',
        secure: true
    }

    const options = optionsForm 
    ? optionsForm
    : optionsDefault

    setCookie(ctx, name, data, options)
}

export const getCookie = (ctx, nameForm) => {
    const name = nameForm ? nameForm : 'talkgram_token'
    const cookie = parseCookies( ctx )[name]
    
    const cookieValid = cookie ? cookie : false
    return cookieValid
}