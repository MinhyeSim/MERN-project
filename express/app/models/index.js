import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
//UserModel은 스키마구조로 테이블이 형성되고 그 형성된 테이블을 mongoose가 DB로 연결 해준다.

export default db