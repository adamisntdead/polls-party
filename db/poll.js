import mongoose from 'mongoose'

const PollSchema = new mongoose.Schema({
  title: String,

  // Needed for geospatial queries
  loc: { type: [Number], index: '2d' }
})

export default mongoose.model('Poll', PollSchema)