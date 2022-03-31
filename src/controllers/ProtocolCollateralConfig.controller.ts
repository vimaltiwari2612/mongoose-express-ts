import ProtocolCollateralConfig, { IProtocolCollateralConfig } from '../models/ProtocolCollateralConfiguration.model';
import ProtocolConfig, { IProtocolConfig } from '../models/ProtocolConfiguration.model';
import IProtocolConfigController from '../controllers/ProtocolConfig.controller';
import ErrorHandler from '../utils/ErrorHandler.util';
import Constants from '../utils/Constants.util';

export default class IProtocolCollateralConfigController {

    getRecords(filterCondition: any): any {
        return ProtocolCollateralConfig.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const controller: IProtocolConfigController = new IProtocolConfigController();
        const protocolRecord: IProtocolConfig = await controller.getRecords({ "Name": data.Protocol_Config});
        console.log("Searched data : " + protocolRecord);
        if(!protocolRecord){
            return ErrorHandler.getErrorJson(Constants.PROTOCOL_CONFIG_NOT_FOUND, null);
        }
        const protocolConfigFields = {
            Protocol_Config: protocolRecord,
            Collateral_Type: data.Collateral_Type,
            Conversion_Type: data.Conversion_Type
        };
        console.log("protocolConfigFields : " + protocolConfigFields);
        // Create
        let protocolCollateralConfig: IProtocolCollateralConfig = new ProtocolCollateralConfig(protocolConfigFields);
        await protocolCollateralConfig.save();
        return protocolCollateralConfig;
    }
}