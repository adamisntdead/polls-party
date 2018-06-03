import mongoose from 'mongoose'

const PollSchema = new mongoose.Schema({
  title: String
})

export default mongoose.model('Poll', PollSchema)