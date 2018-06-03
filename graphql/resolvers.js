export default {
  Query: {
    polls: async (parent, args, { models }) => {
      return await models.Poll.find({})
    },
  },
  Mutation: {
    createPoll: async (parent, { title }, { models }) => {
      // create a new post
      const newPoll = new models.Poll({
        title
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