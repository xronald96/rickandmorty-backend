import { Router } from 'express';
import { getEpisodes, getEpisode } from '../controllers/episode';
import { FilterEpisode } from '../types/EpisodeEntity';
const episodeRouter = Router();

episodeRouter.get('/', async(req, res)=> {
    const response = await getEpisodes(req.query as FilterEpisode)
    res.status(response.status).json(response)
})

episodeRouter.get('/:id', async(req, res)=> {
    const response = await getEpisode(req.params.id)
    res.status(response.status).json(response)
})
export default episodeRouter;