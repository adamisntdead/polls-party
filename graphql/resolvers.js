export default {
  Query: {
    polls: async (parent, args, { models }) => {
      return await models.Poll.find({})
    },
    poll: async (parent, { id }, { models }) => {
      return await models.Poll.findById(id)
    },

    pollsNear: async (parent, { latitude, longitude, distance }, { models }) => {
      const coordinates = [latitude, longitude]

      return models.Poll.find({
        location: {
          $near: {
            $maxDistance: distance,
            $geometry: {
              type: 'Point',
              coordinates
            }
          }
        }
      })
    }
  },
  Mutation: {
    createPoll: async (parent, { title, latitude, longitude }, { models }) => {
      // create a new post
      const newPoll = new models.Poll({
        title,
        location: {
          coordinates: [latitude, longitude]
        }
      })

      // save the post
      try {
        await newPoll.save()
      } catch (e) {
        throw new Error('Cannot Save Poll')
      }

      return newPoll
    },
  },
}