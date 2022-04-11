const utils = {
    getRandomUniqueId: function () {
        return Math.random().toString(36).substring(5);
    },
    getUniqueUserId: function () {
        let date = new Date();
        return date.getMonth().toString()
            .concat(date.getDate().toString()
                .concat(date.getHours().toString()
                    .concat(date.getMinutes().toString()
                        .concat(date.getSeconds().toString()))));
    },
    getRole: function (path) {
        if (path.includes("user")) {
            return "U101";
        } else if (path.includes("admin")) {
            return "A101";
        } else {
            return "I101";
        }
    }
};

export default utils;
