let instance;
export default class LocalStorageController {
    /** 
     * @param {key} string The key you want the data
     **/

    constructor(key) {
        if (instance) {
            this.listeners = instance.listeners;
        } else {
            this.listeners = [];
        }

        instance = this;
    }

    /** 
     * @param {items} array An array with the content of the object
    **/
    setValues(key, items) {
        if (items === undefined) {
            console.log("Não há nada para inserir no local storage")
            return null
        } else {
            localStorage.setItem(key, JSON.stringify(items))
            this.notifyListeners()
            return items
        }
    }

    getValues(key) {
        let data;

        try {
            data = JSON.parse(localStorage.getItem(key))
        } catch (error) {
            console.log(error)
        }

        return data ? data : null
    }

    addListener(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener())
    }
}