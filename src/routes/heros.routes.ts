import { Router } from 'express';
import CreateHeroService from '../services/CreateHeroService';

const herosRoutes = Router();

herosRoutes.get('/', async (request, response) => {});

herosRoutes.post('/', async (request, response) => {
   const { name, author, description, image_url } = request.body;

   const createHeroService = new CreateHeroService();

   const hero = await createHeroService.execute({
      name,
      author,
      description,
      image_url,
   });

   return response.json(hero);
});

export default herosRoutes;
