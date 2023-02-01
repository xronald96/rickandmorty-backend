import { Router } from 'express';
import { getCharacter, getCharacters } from '../controllers/character';
const characterRouter = Router();

characterRouter.get('/', async(req, res)=> {
    const response = await getCharacters(req.query.page as string)
    res.status(response.status).json(response)
})

characterRouter.get('/:id', async(req, res)=> {
    const response = await getCharacter(req.params.id)
    res.status(response.status).json(response)
})
export default characterRouter;