module.exports = (app, constants) => {
  require('./login')(app, constants)
    require('./builds')(app, constants)
    require('./create')(app, constants)
    require('./guides')(app, constants)
    require('./home')(app, constants)
    require('./options')(app, constants)
    require('./about')(app, constants)
    require('./profile')(app, constants)
    require('./redirect')(app, constants)
    require('./lives')(app, constants)
    app.use(require('./404'))
  }
