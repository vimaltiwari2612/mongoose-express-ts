import { Document, model, Schema } from "mongoose";

/**
 * Interface to model the Protocol config for TypeScript.
    * @param Name: String
    * @param Type: String
 */
export interface IProtocolConfig extends Document {
    Name: String,
    Type: String
}

export const protocolConfig: Schema = new Schema({
    Name: {
        type: String
    },
    Type: {
        type: String
    }
});

const ProtocolConfig = model<IProtocolConfig>("protocolConfig", protocolConfig);

export default ProtocolConfig;