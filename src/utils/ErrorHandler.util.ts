export default class ErrorHandler {

    static getErrorJson(msg: any, errors: any): any {
        var jsonToBeReturned = {
            errors: [
                {
                    msg: msg,
                },
            ],
        }
        if (!errors.isEmpty()) {
            jsonToBeReturned = {
                errors: errors.array()
            }
        }
        return jsonToBeReturned;
    }

}