const { model, Schema } = require('mongoose')
const configLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    places: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Places',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

userSchema.plugin(configLocalMongoose, { usernameField: 'email' })
module.exports = model('User', userSchema)
