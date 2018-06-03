import mongoose from 'mongoose'
import Poll from './poll'

mongoose.Promise = global.Promise

export const start = (url) => mongoose.connect(url)

export const models = {
  Poll
}
