const utils = {
    CURRENT_USER: 'CURRENT_USER',
    FERRY: 'FERRY',
    FLIGHT: 'FLIGHT',
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
    },
    getUserRoleBasedOnCode: function (roleCode) {
        switch (roleCode) {
            case "U101":
                return "Resident";
            case "A101":
                return "Admin";
            case "I101":
                return "Inspector";
            default:
                return "Unknown";
        }
    },
    getProgressCircle() {
        return (<div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>);
    },
    validateForm(errors, data) {
        let valid = false;
        let isNulls = Object.values(data).some((val) => {
            return !val;
        })
        let isEmpty = Object.values(data).some((val) => {
            return val && val.length < 1;
        })
        let isErrors = Object.values(errors).some((val) => {
            return val.length < 1;
        })
        console.log(isNulls, isEmpty, isErrors);
        valid = !(isNulls || isEmpty) && isErrors;
        return valid;
    },
    getCurrentUser() {
        return localStorage.getItem(utils.CURRENT_USER)
    }
};

export default utils;
