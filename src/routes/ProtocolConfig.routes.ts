import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import IProtocolConfigController from "../controllers/ProtocolConfig.controller";
import ErrorHandler from "../utils/ErrorHandler.util";
import Constants from "../utils/Constants.util";

const router: Router = Router();

// @route   GET /ProtocolConfig
// @desc    Get Protocol Config
// @access  Private
router.get("/", async (req, res) => {
  try {
    const controller: IProtocolConfigController = new IProtocolConfigController();
    const protocolConfig: IProtocolConfigController = await controller.getRecords({});
    if (!protocolConfig) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(ErrorHandler.getErrorJson(Constants.NO_PROTOCOL_CONFIG_FOUND, null));
    }
    res.json(protocolConfig);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
  }
});


// @route   POST /ProtocolConfig
// @desc    create and update ProtocolConfig
// @access  Private
router.post(
  "/",
  [
    check("Name", "Name is required").not().isEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(ErrorHandler.getErrorJson('', errors.array()));
    }
    try {
      const controller: IProtocolConfigController = new IProtocolConfigController();
      const protocolConfig: IProtocolConfigController = await controller.createRecord(req.body);
      res.json(protocolConfig);
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(Constants.SERVER_ERROR);
    }
  }
);

export default router;
