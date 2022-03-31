import { Document, model, Schema } from "mongoose";

/**
 * Interface to model the Organization Config for TypeScript.
    * @param Min_Collateral: String
    * @param Max_Collateral: String
    * @param Convert_To_Stable_Coin: String
    * @param Max_Repayment_Period: String
    * @param Number_Of_Free_Repayments: Number
    * @param Notification_Level_LTVs: String
    * @param Basic_Loan_Fee: Number
    * @param Collateral_Addition_Fee: Number
    * @param Repayment_Fee: Number
    * @param Collateral_Return_Fee: Number
 */
export interface IOrganizationConfig extends Document {
  Min_Collateral: String,
  Max_Collateral: String,
  Convert_To_Stable_Coin: String,
  Max_Repayment_Period: String,
  Number_Of_Free_Repayments: Number,
  Notification_Level_LTVs: String,
  Basic_Loan_Fee: Number,
  Collateral_Addition_Fee: Number,
  Repayment_Fee: Number,
  Collateral_Return_Fee: Number
}

const organizationConfig: Schema = new Schema({
  Min_Collateral: {
    type: String
  },
  Max_Collateral: {
    type: String
  },
  Convert_To_Stable_Coin: {
    type: String
  },
  Max_Repayment_Period: {
    type: String
  },
  Number_Of_Free_Repayments: {
    type: Number
  },
  Notification_Level_LTVs: {
    type: String
  },
  Basic_Loan_Fee: {
    type: Number
  },
  Collateral_Addition_Fee: {
    type: Number
  },
  Repayment_Fee: {
    type: Number
  },
  Collateral_Return_Fee: {
    type: Number
  }
});

const OrganizationConfig = model<IOrganizationConfig>("organizationConfig", organizationConfig);

export default OrganizationConfig;
