class GlobalModels {
    constructor() { }
}

GlobalModels.ApiResponse =
    class {
        ErrorRes(status, message) {
            return {
                status, message
            }
        }

        SuccessRes(status, data) {
            return {
                status, data
            }
        }
    };


module.exports = GlobalModels;