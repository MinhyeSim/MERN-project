import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function UserService() {

    const User = db.User
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();
   
    return {
        join(req, res) {
            new User(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('회원가입 실패')
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})

                }
            })
        },
        login(req, res) {
            User.findOne({
                userid: req.body.userid
            }, function (err, user) {
                if (err) 
                    throw err
                if (!user) {
                    res
                        .status(401)
                        .send({success: false, message: '해당 ID가 존재하지 않습니다'});
                } else {
                    console.log(' ### 로그인 정보 : ' + JSON.stringify(user))
                    user.comparePassword(req.body.password, function (_err, isMatch) {
                        if (!isMatch) {
                            res
                                .status(401)
                                .send({message:'FAIL'});
                        } else {
                            user.generateToken((err, user) => {
                                if (err) 
                                    res
                                        .status(400)
                                        .send(err)
                                res
                                    .status(200)
                                    .json(user)
                            })
                        }
                    })
                }
            })
        },
        logout() {
            req.logout();
            res.json({success: true, msg: '로그아웃'});

        },
        checkDuplicateUserid(req, res) {
            User
                .findById({userid: req.body.userid})
                .exec((err, user) => {
                    if (err) {
                        res
                            .status(500)
                            .send({message: err});
                        return;
                    }
                    if (user) {
                        res
                            .status(400)
                            .send({message: "ID가 이미 존재합니다"});
                        return;
                    }
                })
        },
        getUserById(userid){
            User
                .findById({userid: userid})
                .exec((_err, user) => {
                    return user
                })
        },
        delUser(req, res){
            User
            .findById({userid: req.body.userid})
            .exec((err, user) => {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    return;
                }
                if (user) {
                    res
                        .status(400)
                        .send({message: "ID가 이미 존재합니다"});
                    return;
                }
            })
        },
        updateUser(req, res){
            User
            .findById({userid: req.body.userid})
            .exec((err, user) => {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    return;
                }
                if (user) {
                    res
                        .status(400)
                        .send({message: "ID가 이미 존재합니다"});
                    return;
                }
            })
        },
        getUsers(req, res){
            User
            .findById({userid: req.body.userid})
            .exec((err, user) => {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    return;
                }
                if (user) {
                    res
                        .status(400)
                        .send({message: "ID가 이미 존재합니다"});
                    return;
                }
            })
        },
    } 
}