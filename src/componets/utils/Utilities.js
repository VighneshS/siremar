const utils = {
    getRandomUniqueId: function () {
        return Math.random().toString(36).substring(5);
    }
};

export default utils;
