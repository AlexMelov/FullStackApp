import { Router } from 'express';

const router : any = Router();

import Posts from '../models/post';

router.get('/', (req : any, res : any) => res.send('Post + TypeScript Server'));
router.post('/', (req : any, res : any) => 
{
	const post = new Posts({
		title: req.body.title,
		description: req.body.description
	});

	post
		.save()
		.then((data : JSON) => 
		{
			res.json(data);
		})
		.catch((err : string) => 
		{
			res.json({ message: err });
		});
});
export default router;
