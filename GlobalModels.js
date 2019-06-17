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

    GlobalModels.DBConnectionStrings =
    class {
        BE20(){
            return "mongodb://heroku_px1bcmgn:6h6fsis3lbljj72s42qn99kog0@ds157946.mlab.com:57946/heroku_px1bcmgn";
        }
    }

module.exports = GlobalModels;