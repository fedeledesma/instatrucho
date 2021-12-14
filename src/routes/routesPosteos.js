import * as controllerPosteos from '../controllers/controllerPosteos.js'

const routesPosteos = app => {
    app.get('/inicio',controllerPosteos.inicio)
}
export default routesPosteos