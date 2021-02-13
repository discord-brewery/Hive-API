class FetchError extends Error {
    
    constructor(message) {
        super();
        this.message = message;
        this.name = 'FetchError';
    }
}

module.exports = FetchError;
