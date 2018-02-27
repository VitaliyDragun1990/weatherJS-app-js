class Storage {

    constructor() {
        this.city = null;
        this.state = null;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL';
    }

    getLocationData() {
        this.city = localStorage.getItem('city') === null ? this.defaultCity : localStorage.getItem('city');
        this.state = localStorage.getItem('state') === null ? this.defaultState : localStorage.getItem('state');

        return {
            city: this.city,
            state: this.state
        };
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}