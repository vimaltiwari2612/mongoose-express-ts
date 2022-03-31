import OrganizationConfig, { IOrganizationConfig } from "../models/OrganizationConfig.model";

export default class IOrganizationConfigController {

    getRecords(filterCondition: any): any {
        return OrganizationConfig.find(filterCondition).populate("");
    }

    async createRecord(data: any): Promise<any> {
        const { Min_Collateral } = data;
        const organizationConfigFields = {
            Min_Collateral
        };
        // Create
        let organizationConfig: IOrganizationConfig = new OrganizationConfig(organizationConfigFields);
        await organizationConfig.save();
        return organizationConfig;
    }
}