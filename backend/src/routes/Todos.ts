import { Router } from 'express';
// import Posts from '../models/post';

const router: any = Router();

// router.get('/', (req: any, res: any) => res.send('Post + TypeScript Server'));
// router.post('/', (req : any, res : any) =>
// {
// 	const post = new Posts({
// 		title: req.body.title,
// 		description: req.body.description
// 	});
//
// 	post
// .save()
// .then(data =>
// {
// 	res.json(data);
// })
// .catch((err : string) =>
// {
// 	res.json({ message: err });
// });
// });

router.get('/todos', (req, res) => 
{
	res.send('On todos');
});
module.exports = router;
