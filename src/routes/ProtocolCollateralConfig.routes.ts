import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import IProtocolCollateralConfigController from "../controllers/ProtocolCollateralConfig.controller";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";

const router: Router = Router();

// @route   GET /ProtocolCollateralConfig
// @desc    Get Protocol Collateral Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: IProtocolCollateralConfigController = new IProtocolCollateralConfigController();
    const protocolCollateralConfig: IProtocolCollateralConfigController = await controller.getRecords({});
    if (!protocolCollateralConfig) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.NO_PROTOCOL_CONFIG_FOUND, null));
    }
    res.json(protocolCollateralConfig);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /ProtocolCollateralConfig
// @desc    create and update Protocol Collateral Config
// @access  Private
router.post(
  "/",
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: IProtocolCollateralConfigController = new IProtocolCollateralConfigController();
      const protocolCollateralConfig: IProtocolCollateralConfigController = await controller.createRecord(req.body);
      res.json(protocolCollateralConfig);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
