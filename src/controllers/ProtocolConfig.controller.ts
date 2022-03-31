import ProtocolConfig, { IProtocolConfig } from '../models/ProtocolConfiguration.model';

export default class IProtocolConfigController {

    getRecords(filterCondition: any): any {
        return ProtocolConfig.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Name, Type } = data;
        const protocolFields = {
            Name, Type
        };
        // Create
        let protocolConfig: IProtocolConfig = new ProtocolConfig(protocolFields);
        await protocolConfig.save();
        return protocolConfig;
    }
}