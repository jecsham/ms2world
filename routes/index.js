module.exports = (app, constants) => {
  require('./login')(app, constants)
    require('./beats')(app, constants)
    require('./builds')(app, constants)
    require('./create')(app, constants)
    require('./guides')(app, constants)
    require('./home')(app, constants)
    require('./delete')(app, constants)
    require('./redirect')(app, constants)
    require('./lives')(app, constants)
    require('./vote')(app, constants)
    app.use(require('./404'))
  }
