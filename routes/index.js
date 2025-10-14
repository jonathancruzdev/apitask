import taskRouter from './taskRoute.js'

const routerAPI = (app) =>{
    app.use('/api/tasks', taskRouter)
}

export default routerAPI;