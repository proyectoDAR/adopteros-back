import * as Joi from "joi"

export default Joi.object(
    {
      NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
      PORT: Joi.number().port().default(3000),
      POSTGRES_USER: Joi.string().default('user'),
      POSTGRES_PASSWORD: Joi.string().default('secret'),
      POSTGRES_DB: Joi.string().default('adopteros'),
      PORTS_DB: Joi.number().port().default(5432),
      DATABASE_URL: Joi.string(),
    }
  )