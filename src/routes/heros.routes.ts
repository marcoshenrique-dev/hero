import { Router } from 'express';
import CreateHeroService from '../services/CreateHeroService';
import FindHeroService from '../services/FindHeroService';

const herosRoutes = Router();

herosRoutes.get('/:hero', async (request, response) => {
   const { hero } = request.params;

   const findHeroService = new FindHeroService();

   const heroResponse = await findHeroService.execute({
      name: hero,
   });

   return response.json(heroResponse);
});

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
