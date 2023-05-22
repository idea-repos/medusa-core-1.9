import { defaultRelationsExtended } from "."
import { StoreService } from "../../../../services"
import { FlagRouter } from "../../../../utils/flag-router"

export default async (req, res) => {
    const storeService: StoreService = req.scope.resolve("storeService");
    const featureFlagRouter: FlagRouter = req.scope.resolve("featureFlagRouter")

    const relations = [...defaultRelationsExtended]
    if (featureFlagRouter.isFeatureEnabled("sales_channels")) {
        relations.push("default_sales_channel")
    }

    console.log('----get-all-stores working---', req);
    console.log('----relations---', relations);

    const data = await storeService.retrieveallstores({relations})

    res.status(200).json({message: 'Get all Stores Working', data});
    
}