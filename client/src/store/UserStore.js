import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._pass = ''
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setPass(pass) {
        this._pass = pass
    }

    get pass() {
        return this._pass
    }

    get isAuth() {
      return this._isAuth
    }

    get user() {
      return this._user
    }
}
