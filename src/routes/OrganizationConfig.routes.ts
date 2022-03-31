import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import IOrganizationConfigController from "../controllers/OrganizationConfig.controller";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";

const router: Router = Router();

// @route   GET /OrganizationConfig
// @desc    Get Organization  Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: IOrganizationConfigController = new IOrganizationConfigController();
    const organizationConfig: IOrganizationConfigController = await controller.getRecords({});
    if (!organizationConfig) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.NO_ORG_CONFIG_FOUND, null));
    }
    res.json(organizationConfig);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /OrganizationConfig
// @desc    create and update OrganizationConfig
// @access  Private
router.post(
  "/",
  [
    check("Min_Collateral", "Min Collateral is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: IOrganizationConfigController = new IOrganizationConfigController();
      const organizationConfig: IOrganizationConfigController = await controller.createRecord(req.body);
      res.json(organizationConfig);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
