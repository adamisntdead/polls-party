import mongoose from 'mongoose'

const PollSchema = new mongoose.Schema({
  title: String,

  // Needed for geospatial queries
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  }
})

PollSchema.index({ location: '2dsphere' })

export default mongoose.model('Poll', PollSchema)