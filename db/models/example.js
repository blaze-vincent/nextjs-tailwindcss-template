import { Schema, model, models } from 'mongoose';

const ExampleSchema = new Schema({
  description: String,
  requiredDescription: {
    type: String,
    required: true
  }
})

module.exports = models.Example || model('Example', ExampleSchema)