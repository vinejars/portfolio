const PORT = process.env.PORT || 1863
const app = require('./app')

const init = async () => {
  try {
    // if(process.env.SEED === 'true'){
    //   await seed();
    // }
    // else {
    //   await db.sync()
    // }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Runnin on port ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
