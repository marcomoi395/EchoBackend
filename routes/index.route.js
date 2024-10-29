const authRouter = require('./auth.route')
const budgetTrackerRouter = require('./budgetTracker.route')
const verifyJWT = require('../middlewares/verifyJWT')

module.exports = (app) => {
    // app.use('/auth', authRouter);

    // app.use(verifyJWT);

    // app.get('/', (req, res) => {
    //     // res.redirect('/dashboard');
    //     res.send('Hello World')
    // });

    app.use('/budget-tracker', budgetTrackerRouter)
}