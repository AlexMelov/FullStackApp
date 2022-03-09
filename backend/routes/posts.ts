import { Router } from 'express'

const router = Router()
import Posts from '../models/post'

router.get('/', (req, res) => res.send('Post + TypeScript Server'))
router.post('/', (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
    })
    post.save()
        .then((data: any) => {
            res.json(data)
        })
        .catch((err: any) => {
            res.json({ message: err })
        })
})
export default router
