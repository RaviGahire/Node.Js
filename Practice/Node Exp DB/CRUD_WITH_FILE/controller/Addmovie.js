const { render } = require('ejs')
const mongoose  = require('mongoose')

exports.Addmovie = async (req,res)=>{

res.render('addmovie.ejs')


}