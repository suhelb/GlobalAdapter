let connectionstrings = {};
connectionstrings.BE20 = "mongodb://heroku_px1bcmgn:6h6fsis3lbljj72s42qn99kog0@ds157946.mlab.com:57946/heroku_px1bcmgn";



class DBConfigs {
    constructor(){}
    getconnectionstring(dbname){
        connectionstrings[dbname];
    }
}


module.exports = DBConfigs;