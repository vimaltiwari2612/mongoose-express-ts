import { Document, model, Schema } from "mongoose";
import {protocolConfig, IProtocolConfig } from './ProtocolConfiguration.model';

/**
 * Interface to model the Protocol Collateral config for TypeScript.
    * @param Protocol_Config: IProtocolConfig
    * @param Collateral_Type: String
    * @param Conversion_Type: String
 */
export interface IProtocolCollateralConfig extends Document {
    Protocol_Config: IProtocolConfig,
    Collateral_Type: String,
    Conversion_Type: String
}

const protocolCollateralConfig: Schema = new Schema({
    Protocol_Config: [protocolConfig] ,
    Collateral_Type: String ,
    Conversion_Type: String
});

const ProtocolCollateralConfig = model<IProtocolCollateralConfig>("protocolCollateralConfig", protocolCollateralConfig);
export default ProtocolCollateralConfig;
