import { Router } from 'express';
import { getLocation, getLocations } from '../controllers/location';
const locationRouter = Router();

locationRouter.get('/', async(req, res)=> {
    const response = await getLocations(req.query)
    res.status(response.status).json(response)
})

locationRouter.get('/:id', async(req, res)=> {
    const response = await getLocation(req.params.id)
    res.status(response.status).json(response)
})
export default locationRouter;