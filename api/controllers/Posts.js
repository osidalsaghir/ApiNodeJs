const DB = require('../middleware/DB');
const db = require("../models/Posts");

exports.getAll = (req, res, next) => {
    let limit =  parseInt(req.body.limit) ; 
    let offset = parseInt(req.body.offset) ; 
    theFromLimits = limit * (offset-1);
    console.log(limit);
    console.log(offset);
    DB.query('SELECT * FROM posts LIMIT '+theFromLimits+' offset '+limit)
    .then(([mode,result]) => {
        res.json(200,result);
    }).catch(
        (err) => {
            res.status(500).json({
                data: err,
                erorr: 1
            });
        }
    );
}

exports.create = (req, res, next) => {
    console.log(req.body);
    db.findOne().then(result => {
        if (result) {
            return req.status(409).json({
                massage: 1001

            });
        } else {
            db.create({
                langId: req.body.langId,
                pageId: req.body.pageId,
                coverType: req.body.coverType,
                CoverImage: req.body.CoverImage,
                CoverVideo: req.body.CoverVideo,
                namePost: req.body.namePost,
                seoTitle: req.body.seoTitle,
                seoDescription: req.body.seoDescription,
                seoKeywords: req.body.seoKeywords,
                Slug: req.body.Slug,
                visibility: req.body.visibility,
                shortContents: req.body.shortContents,
                Contents: req.body.Contents,
                Statu: req.body.Statu,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,
            }).then((result) => {
                res.status(201).json({
                    message: 2000,

                });
            }

            ).catch((error) => {
                res.status(500).json({
                    message: 55555,
                    error: err
                });
            }

            );
        }
    }

    ).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.update = (req, res, next) => {
    db.findByPk(req.body.id).then((result) => {
        return result.update({

            langId: req.body.langId,
            pageId: req.body.pageId,
            coverType: req.body.coverType,
            CoverImage: req.body.CoverImage,
            CoverVideo: req.body.CoverVideo,
            namePost: req.body.namePost,
            seoTitle: req.body.seoTitle,
            seoDescription: req.body.seoDescription,
            seoKeywords: req.body.seoKeywords,
            Slug: req.body.Slug,
            visibility: req.body.visibility,
            shortContents: req.body.shortContents,
            Contents: req.body.Contents,
            Statu: req.body.Statu,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
        }).then((result) => {
            res.status(201).json({
                message: 2001,

            });
        }).catch(
            (error) => {
                res.status(500).json({
                    message: 55555,
                    error: error
                });
            }
        );
    })
};
exports.count = (req, res, next) => {
    db.query("select count(*) form users").then(
        (res) => {
            res.status(201).json({
                data: res,
                error: 0,
            });
        }
    ).catch(
        (res) => {
            res.status(500).json({
                data: res,
                erorr: 1
            });
        }
    );
}

exports.delete = (req, res, next) => {
    db.destroy({
        where: {
            id: req.body.id
        }
    }).then((result) => {
        res.status(201).json({
            message: 2002,
            erorr: 0,
            data: result
        });
    }).catch(err => {
        return res.status(500).json({
            message: 55555,
            error: 1,
            data: err
        });
    })
};