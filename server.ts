import express from 'express'
import baseRouter from './routes/baseRouter'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use('/arbas', baseRouter)
app.disable('x-powered-by')



app.get('/', (_req, res) => {
	res.send('Hola mundo')
})

app.listen(PORT, () => {
	console.log("corriendo en puerto: " + PORT)
})

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API documentation for iRBAS',
            version: '1.0.0',
            description: 'Swagger documentation for iRBAS project',
        },
        servers: [
            {
                url:'http://localhost:3000/arbas',
            }
        ],
        components:{
            securitySchemes: {
                Bearer: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormar: 'JWT',
                    description: 'Enter generated token from login'
                }
            }
        },
        security: [
            {
                Bearer: []
            }
        ],
    },
    apis: ['./routes/*.ts']
}
const swaggeDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggeDocs))